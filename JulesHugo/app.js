const sequelize = require("./init"); // Importer Sequelize
const User = require("./models/User"); // Importer le modèle User

// Synchroniser la base de données et effectuer des opérations
sequelize
  .sync()
  .then(async () => {
    console.log("Database synchronized!");

    // Exemple : Créer un nouvel utilisateur
    const newUser = await User.create({
      username: "john_doe",
      email: "john.doe@example.com",
      password: "securepassword123",
    });
    console.log("New user created:", newUser.toJSON());

    // Exemple : Lire les utilisateurs
    const users = await User.findAll();
    console.log(
      "All users:",
      users.map((user) => user.toJSON()),
    );
  })
  .catch((error) => {
    console.error("Error synchronizing the database:", error);
  });
