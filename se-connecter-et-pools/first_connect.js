
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Medode de connexion à la base de données avec Sequelize sur PostgreSQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
});

/**
 * Comme on peu le lire ici je me connecte à la base de données avec Sequelize sur PostgreSQL.
 * J'importe la classe Sequelize de la librairie sequelize.
 * J'importe le module dotenv pour charger les variables d'environnement.
 * Je crée une instance de Sequelize avec les variables d'environnement.
 * 
 * Les variables d'environnement sont les suivantes :
 * - DB_NAME : le nom de la base de données
 * - DB_USER : l'utilisateur de la base de données
 * - DB_PASS : le mot de passe de l'utilisateur de la base de données
 * - DB_HOST : l'hôte de la base de données
 * - DB_PORT : le port de la base de données
 * - DB_DIALECT : le dialecte de la base de données
 * 
 * Le dialecte est le type de base de données que vous utilisez, ici PostgreSQL.
 */

// Test de la connexion à la base de données
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

/**
 * Ici j'essaie de me connecter à la base de données avec la méthode authenticate() de l'instance de Sequelize.
 * Si la connexion est établie, j'affiche un message de succès.
 * Sinon, j'affiche un message d'erreur.
 */

// Fermeture de la connexion à la base de données
sequelize.close();

/**
 * Ici je ferme la connexion à la base de données avec la méthode close() de l'instance de Sequelize.
 * C'est une bonne pratique de fermer la connexion à la base de données une fois que vous avez terminé de l'utiliser.
 * Cela libère les ressources et évite les fuites de mémoire.
 */