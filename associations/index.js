const { Sequelize, DataTypes, Model } = require("sequelize");

/**
 * Remarque: les credentials et la config devraient être
 * déplacés dans un fichier d'environnement et chargés
 * à l'execution (via le module dotenv par ex.)
 */
const sequelize = new Sequelize("demo", "root", "password", {
  dialect: "mysql",
  host: "localhost",
  port: "5010",
});

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

class BloodGroup extends Model {}

BloodGroup.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    label: {
      type: DataTypes.ENUM("A", "B", "O", "AB"),
    },
  },
  {
    sequelize,
  }
);

class Doctor extends Model {}

Doctor.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialty: {
      type: DataTypes.ENUM(
        "Cardiologue",
        "Chirurgien",
        "Psychiatre",
        "Anesthésiste"
      ),
    },
  },
  {
    sequelize,
  }
);

//Association many to one : 
//Un user a un groupe sanguin, un groupe sanguin est partagé par plusieurs users
BloodGroup.hasMany(User);
User.belongsTo(BloodGroup);

//Association many to many :
//Un user a plusieurs médecins, un médecin à plusieurs patients
User.belongsToMany(Doctor, { through: "is_patient" });
Doctor.belongsToMany(User, { through: "is_patient" });

(async () => {
  //Créer les tables
  await sequelize.sync({ force: true });

  //Insérer des données test
  //Création en bulk de records de BloodGroup

  const bloodGroups = await BloodGroup.bulkCreate([
    { label: "A" },
    { label: "B" },
    { label: "O" },
    { label: "AB" },
  ]);

  //Création en bulk de users
  const users = await User.bulkCreate([
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Doe"},
  ]);


  //Création en bulk de docteurs
  const doctors = await Doctor.bulkCreate(
    [
      {name: 'Dr Muller', specialty: 'Cardiologue'},
      {name: 'Dr Shepard', specialty: 'Chirurgien'},
    ]
  )

  const jane = users.find(user => user.firstName === 'Jane');
  const john = users.find(user => user.firstName === 'John');

  console.log(jane);

  //Associer un user à un groupe sanguin (Many To One)
  await jane.setBloodGroup(bloodGroups[0]);
  await john.setBloodGroup(bloodGroups[1]);
  await jane.setDoctors(doctors[0]);
  await john.setDoctors([doctors[0], doctors[1]]);
  //Lire une propriété du groupe sanguin d'un user
  console.log((await jane.getBloodGroup()).label);

  //Associer un docteur à un user (Many To Many)
  // await john.setDoctor

  //Lazy loading : les objets associés (groupe sanguin)
  //n'est pas remonté (pas de jointure)
  let user = await User.findOne({
    where: {
      firstName: 'John',
    },
  });

  console.log('Lazy loading:')
  console.log(user)

  //Eager loading (jointures)
  user = await User.findOne({
    where: {
      firstName: 'John',
    },
    include: [BloodGroup, Doctor]
  });

  console.log('Eager loading:')
  console.log(user)

  sequelize.close();
})();
