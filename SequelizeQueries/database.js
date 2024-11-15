const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize a connection to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT, 
});

(async () => {
    try {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS events (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                date DATETIME NOT NULL,
                description TEXT,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `;

        await sequelize.query(createTableQuery);
        console.log('La table "events" a été créée avec succès.');
    } catch (error) {
        console.error('Erreur lors de la création de la table :', error);
    } finally {
        await sequelize.close(); // Fermer la connexion
    }
})();

(async () => {
    try {
        const insertConcertQuery = `
            INSERT INTO events (name, date, description)
            VALUES (:name, :date, :description);
        `;

        // Remplacements des paramètres dans la requête
        await sequelize.query(insertConcertQuery, {
            replacements: {
                name: 'Jazz Festival',
                date: '2024-12-15 20:00:00',
                description: 'Un festival de jazz à New York.',
            },
        });

        console.log('Concert ajouté avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'ajout du concert :', error);
    } finally {
        await sequelize.close(); // Fermer la connexion
    }
})();

module.exports = sequelize;