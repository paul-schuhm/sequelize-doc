const { Sequelize, DataTypes } = require('sequelize');

// Configuration Sequelize
const sequelize = new Sequelize('testdb', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Modèle d'exemple
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
});

// Tester la connexion
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Synchroniser les modèles
    await sequelize.sync();

    // Récupérer les utilisateurs
    const users = await User.findAll();
    console.log('Users:', users);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
})();
