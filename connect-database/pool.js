
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Medode de connexion à la base de données avec Sequelize sur PostgreSQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

/**
 * Cette fois ci, j'ai ajouté un objet pool à l'instance de Sequelize.
 * Cet objet pool contient les propriétés suivantes :
 * - max : le nombre maximum de connexions dans le pool
 * - min : le nombre minimum de connexions dans le pool
 * - acquire : le temps maximum en millisecondes pour obtenir une connexion
 * - idle : le temps maximum en millisecondes que la connexion peut être inactive
 * 
 * Ces propriétés permettent de configurer le pool de connexions à la base de données.
 * Par exemple, le nombre maximum de connexions dans le pool est de 5.
 * 
 * Cela signifie que le pool peut contenir jusqu'à 5 connexions simultanées à la base de données.
 */

//Note: les parametre de la pool sont ici en dure dans le code mais il est possible de les mettre dans le fichier .env

// Test de la connexion à la base de données
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// Fermeture de la connexion à la base de données
sequelize.close();
