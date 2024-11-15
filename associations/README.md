# Démo - Associations avec Sequelize

Cette démo illustre l'implémentation des associations entre entités avec Sequelize, et la différence entre le *lazy* et le *eager* loading.

## Lancer la démo

> Prérequis: installer Docker pour lancer la base de données

~~~bash
#Lancer la base de données MySQL
docker run --name some-mysql -p 5010:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql:9
npm install
npm run start
~~~

## Ressources utiles

- [Associations](https://sequelize.org/docs/v6/core-concepts/assocs/);
- [Image Docker MySQL 9](https://hub.docker.com/_/mysql)

