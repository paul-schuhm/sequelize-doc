const { Sequelize } = require('sequelize');
const User = require('../models/Book');

// Configuration Sequelize
const sequelize = new Sequelize('testdb', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql',
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
