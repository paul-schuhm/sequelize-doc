# Sequelize, commentent se connecter à une ou plusieurs bases de données

## Authored by: 
[Théau DUGUEPEROUX](theau.dev)
[Baptiste MARIE]()

## Initier le projet
Le projet utilise la vertion 22.11.0 de [Node.js](https://nodejs.org/en/).

Tout d'abord, installer les librairies nécessaires au projet, il suffit de lancer la commande suivante :
```bash
npm install
```

Ensuite pour lancer le projet, il suffit de lancer la commande suivante :
```bash
npm start nom_du_fichier.js
```
> [!WARNING]
> Pour ce projet il faudra aussi changer les informations de connexion à la base de données dans le fichier `.env`.

## Introduction

### Première connexion à une base de données
Dans le premier fichier, nous allons voir comment se connecter à une base de données avec Sequelize.
Pour cela, nous nous somme basé sur la documentation officielle de [Sequelize](https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database).

Ici nous explorons une metode simple pour se connecter à une base de données.

```javascript
const { Sequelize } = require('sequelize');

const config = {
  database: 'database',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'mysql'
};

const database = new Sequelize(config.database, config.username, config.password, config);

try {
  await database.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

database.close();
```

### Connexion à plusieurs bases de données

Dans le deuxième fichier, nous allons voir comment se connecter à plusieurs bases de données avec Sequelize.

Le principe est assez simple une fois que l'on a compris le fonctionnement de la connection à une base de données.

Il suffit de créer un objet de configuration pour chaque base de données et de les passer à la méthode `new Sequelize()`.

```javascript
const database_name = new Sequelize(config.database, config.username, config.password, config);
```

Voici un exemple de configuration pour 3 bases de données :

```javascript
const config1 = {
  database: 'database',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'mysql'
};

const config2 = {
  database: 'database',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'mysql'
};

const config3 = {
  database: 'database',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'mysql'
};

const database1 = new Sequelize(config1.database, config1.username, config1.password, config1);
const database2 = new Sequelize(config2.database, config2.username, config2.password, config2);
const database3 = new Sequelize(config3.database, config3.username, config3.password, config3);


try {
  await database1.authenticate();
  await database2.authenticate();
  await database3.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


database1.close();
database2.close();
database3.close();
```

### Configuration de la base de données (pools)
Dans le troisième fichier, nous allons voir comment configurer les pools de connexion à une base de données avec Sequelize.

Le pool de connexion est un ensemble de connexions à une base de données qui sont maintenues en att et prêtes à être utilisées.

Il est possible de configurer le pool de connexion en passant un objet de configuration à la méthode `new Sequelize()`.

```javascript
const database = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

try {
  await database.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

database.close();
```

Dans cette exemple, nous avons configuré le pool de connexion avec les paramètres suivants :
- `max`: le nombre maximum de connexions dans le pool
- `min`: le nombre minimum de connexions dans le pool
- `acquire`: le temps maximum en millisecondes que le pool attendra une connexion avant de lancer une erreur
- `idle`: le temps maximum en millisecondes que la connexion peut être inactive avant d'être libérée

### Conclusion

Dans ce tutoriel, nous avons vu comment se connecter à une ou plusieurs bases de données avec Sequelize.

Nous avons également vu comment configurer les pools de connexion à une base de données.

Il est important de noter que Sequelize est un ORM (Object-Relational Mapping) qui permet de manipuler des bases de données relationnelles en utilisant des objets JavaScript.

Il est donc possible de créer des modèles de données et de les manipuler en utilisant des méthodes JavaScript.
