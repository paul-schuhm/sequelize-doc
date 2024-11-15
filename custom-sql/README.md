# Sequelize Queries

Ce projet utilise Sequelize pour interagir avec une base de données. Le fichier `database.js` contient la configuration et les fonctions nécessaires pour se connecter et exécuter des requêtes sur la base de données.

## Installation

Pour installer les dépendances nécessaires, exécutez la commande suivante :

```bash
npm install
```

## Configuration

Copier le fichier `.env.example` en `.env` et remplir les informations de connexion à la base de données.

```bash

Assurez-vous de configurer correctement votre base de données dans le fichier `database.js`. Voici un exemple de configuration :

```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT, 
});

module.exports = sequelize;
```

## Utilisation

Vous pouvez utiliser les fonctions définies dans `database.js` pour interagir avec votre base de données. Voici un exemple de comment importer et utiliser ces fonctions :

```javascript
const sequelize = require('./database');

// Exemple de synchronisation de la base de données
sequelize.sync()
    .then(() => {
        console.log('La base de données a été synchronisée.');
    })
    .catch(err => {
        console.error('Erreur lors de la synchronisation de la base de données :', err);
    });
```

## Scripts

Pour exécuter le script `database.js`, utilisez la commande suivante :

```json
node database.js
```

## Aide
