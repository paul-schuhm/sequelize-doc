# Sequelize Demo - Mise à jour des données

Ce projet est une démonstration de l'utilisation de **Sequelize** avec **Node.js** et **MySQL** pour effectuer des opérations CRUD (Create, Read, Update, Delete) sur une table utilisateur.

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-repo/sequelize-demo.git
   cd sequelize-demo
   ```

2. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```

3. Configurez votre base de données MySQL.

    - Créez une base de données (par exemple `demo_db`) :
      ```sql
      CREATE DATABASE demo_db;
      ```

    - Assurez-vous que les informations de connexion dans `config/database.js` correspondent à votre configuration MySQL :
      ```javascript
      const sequelize = new Sequelize('demo_db', 'root', 'password', {
        host: 'localhost',
        dialect: 'mysql',
      });
      ```

## Lancer le projet

1. Démarrez le projet avec **nodemon** :
   ```bash
   npm start
   ```

2. Si la configuration est correcte, vous verrez :
   ```
   Serveur démarré sur http://localhost:3000
   Connexion réussie à la base de données.
   ```

## Routes API

### 1. Créer un utilisateur
- **Méthode** : `POST`
- **URL** : `/users`
- **Body** (JSON) :
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  }
  ```
- **Réponse** :
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30,
    "createdAt": "2024-11-15T12:00:00.000Z",
    "updatedAt": "2024-11-15T12:00:00.000Z"
  }
  ```

---

### 2. Lire un utilisateur
- **Méthode** : `GET`
- **URL** : `/users/:id`
- **Réponse** :
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30,
    "createdAt": "2024-11-15T12:00:00.000Z",
    "updatedAt": "2024-11-15T12:00:00.000Z"
  }
  ```

---

### 3. Mettre à jour un utilisateur
- **Méthode** : `PUT`
- **URL** : `/users/:id`
- **Body** (JSON) :
  ```json
  {
    "name": "Jane Doe"
  }
  ```
- **Réponse** :
  ```json
  {
    "id": 1,
    "name": "Jane Doe",
    "email": "john.doe@example.com",
    "age": 30,
    "createdAt": "2024-11-15T12:00:00.000Z",
    "updatedAt": "2024-11-15T12:10:00.000Z"
  }
  ```

---

### 4. Supprimer un utilisateur
- **Méthode** : `DELETE`
- **URL** : `/users/:id`
- **Réponse** :
  ```json
  {
    "message": "Utilisateur supprimé."
  }
  ```

Développé par **Julick Mellah** et **Yaniss Marelle**.  
Feel free to contribute! 😊