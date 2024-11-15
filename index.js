const { Sequelize, DataTypes } = require("sequelize");

// Configuration Sequelize
const sequelize = new Sequelize("demo", "root", "password", {
  host: "localhost",
  port: 5010,
  dialect: "mysql",
});


// Fonction principale
async function main() {
  try {
    // Tester connexion
    await sequelize.authenticate();
    console.log("Connexion établie avec succès.");

    // Synchroniser les modèles avec BDD
    await sequelize.sync({ force: true }); //On force la synchronisation pour réinitialiser la BDD
    console.log("Modèles synchronisés.\n\n\n");

    // Ajouter des utilisateurs
    const user1 = await User.create({
      name: "Alice",
      email: "alice@example.com",
    });
    const user2 = await User.create({ name: "Bob", email: "bob@example.com" });
    console.log("Ajouts des utilisateurs...\n");
    console.log("Utilisateurs ajoutés :", [user1.name, user2.name],"\n\n");

    //Récupérer un utilisateur avec Primary Key
    const usersOnePK = await User.findByPk(1);
    if (usersOnePK === null) {
      console.log("L'utilisateur n'est pas trouvé !\n");
    } else {
      console.log("Utilisateur trouvé via PK :",usersOnePK instanceof User); // true
      console.log("Nom :",usersOnePK.name,"\n\n"); // Renvoie Bob
    }

    //Récupérer un utilisateur qui s'appelle Bob
    const userOne = await User.findOne({ where: { name: "Bob" } });
    if (userOne === null) {
      console.log("L'utilisateur n'est pas trouvé !\n\n");
    } else {
      console.log("Utilisateur trouvé via son Nom :",userOne instanceof User); // true
      console.log("Nom :",userOne.name,"\n\n"); // Renvoie Bob
    }

    // Récupérer et afficher tous les utilisateurs
    const usersFindAll = await User.findAll();
    console.log("Liste des utilisateurs :");
    usersFindAll.forEach((user) =>
      console.log(`- ${user.name} (${user.email})`)
    );
    console.log("\n\n FINI");
    
  } catch (error) {
    console.error("Erreur lors de l'exécution :", error);
  } finally {
    // Fermer la connexion
    await sequelize.close();
  }
}


// Modèle User
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
});

main();