# Démo - Transactions avec Sequelize

Cette démo illustre l'utilisation des transactions avec Sequelize.

## Lancer la démo

> Prérequis: installer Docker pour lancer la base de données

~~~bash
#Lancer la base de données MySQL
docker run --name some-mysql -p 5010:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql:9
npm install
npm run start
~~~

## Ressources utiles

- [Transactions](https://sequelize.org/docs/v6/other-topics/transactions/);
- [Image Docker MySQL 9](https://hub.docker.com/_/mysql)

