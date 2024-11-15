const { Sequelize, DataTypes } = require("sequelize");

// Configuration Sequelize
const sequelize = new Sequelize("demo", "root", "password", {
  host: "localhost",
  port: 5010,
  dialect: "mysql",
});


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

// Fonction principale
async function main() {
  try {
    // Tester connexion
    await sequelize.authenticate();
    console.log("Connexion établie avec succès.");

    // Synchroniser les modèles avec BDD
    await sequelize.sync({ force: true }); //On force la synchronisation pour réinitialiser la BDD
    console.log("Modèles synchronisés.");

    // Ajouter des utilisateurs
    const user1 = await User.create({ name: "Alice", email: "alice@example.com"});
    const user2 = await User.create({ name: "Bob", email: "bob@example.com" });
    console.log("Utilisateurs ajoutés :", [user1.name, user2.name]);

    // Récupérer et afficher les utilisateurs
    const users = await User.findAll();
    console.log("Liste des utilisateurs :");
    users.forEach((user) => console.log(`- ${user.name} (${user.email})`));
  } catch (error) {
    console.error("Erreur lors de l'exécution :", error);
  } finally {
    // Fermer la connexion
    await sequelize.close();
  }
}

main();
