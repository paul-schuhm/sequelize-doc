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

(async () => {

  //Créer la table users
  await sequelize.sync({ force: true });

  //Afficher le contenu de la base (vide)
  console.log(await User.findAll());

  //On va réaliser une transaction pour créer 2 users d'un coup, soit aucun.

  // Par défaut, Sequelize ne fait pas de transactions. Il faut
  // explicitement en déclarer une
  const t = await sequelize.transaction();

  t.afterCommit(() => {
    // On peut renseigner une instruction à exécuter si le commit passe
    // sur le hoock 'afterCommit'
  });

  try {
    //Cette requête réussit
    await User.create(
      {
        firstName: "Bart",
        lastName: "Simpson",
      },
      { transaction: t }
    );

    //Cette requête échoue (le lastName ne peut pas être nul)
    await User.create(
      {
        firstName: "Bart",
      },
      { transaction: t } // Indiquer que la requete fait partie de la transaction
    );

    //Si tout se passe bien, on commit.
    await t.commit();
  } catch (error) {
    console.log("Il y a eu une erreur. La base n'a pas été modifiée");

    //On rollback (annule tous les changements)
    await t.rollback();
  }

  //La base est toujours vide.
  console.log(await User.findAll());

  sequelize.close();
})();
