# Exemples de migrations du schéma

Le but de cette démo est de pouvoir effectuer des migrations vers la base de données pour pouvoir mettre à jour les données.. 

# Lancer la démo

Après avoir créer et relié une base de donnée au projet puis créer des fichiers de migrations

Migrer la base de donnée
commande pour migrer : npx sequelize-cli db:migrate

commande pour annuler la migrations : npx sequelize-cli db:migrate:undo:all


## Démos

- [Se connecter a une base de donnée](./connect-database/)
- [Créer des entités](./creer-une-entite/)
- [Mettre à jour les données](./mise-a-jour-donnees/)
- [Utiliser les transactions](./transactions/)
- [Créer des associations entre entités](./associations)
- [Écrire des requêtes SQL customs](./custom-sql)
- [Écrire des requêtes préparées](./prepared-statement)
- [Récupérer des données (find)](./recup-donnees)


