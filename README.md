# Exemples de migrations du schéma

Le but de cette démo est de pouvoir effectuer des migrations vers la base de données pour pouvoir mettre à jour les données.. 

# Lancer la démo

Après avoir créer et relié une base de donnée au projet puis créer des fichiers de migrations

Migrer la base de donnée
commande pour migrer : npx sequelize-cli db:migrate

commande pour annuler la migrations : npx sequelize-cli db:migrate:undo:all


## Références utiles

- [Sequelize - Migration](https://sequelize.org/docs/v6/other-topics/migrations/), la page expliquant le focntionnement des migrations ;