const sequelize = require('../config/database');
const User = require('./User');

// Synchronise les modèles avec la base
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie.');

    // Synchronisation des modèles (génère les tables si elles n'existent pas)
    await sequelize.sync({ alter: true });
    console.log('Base de données synchronisée.');
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données :', error);
  }
})();

module.exports = {
  sequelize,
  User,
};
