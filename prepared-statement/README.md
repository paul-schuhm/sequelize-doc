# Comment faire des requêtes préparées avec Sequelize
Ce guide vous montre comment effectuer des requêtes SQL sécurisées dans Sequelize en utilisant des requêtes préparées. Vous trouverez un exemple dans le fichier index.js du dossier requests.

# Qu'est-ce qu'une requête préparée ?
Les requêtes préparées permettent d'éviter les injections SQL en remplaçant les valeurs dans une requête par des paramètres. Cela garantit que les valeurs sont traitées comme des données et non comme du code SQL exécutable.

Types de remplacements dans une requête
Dans Sequelize, vous pouvez utiliser deux types de remplacements :

Paramètres nommés : Utilisez un nom de paramètre précédé de :. Par exemple, :email ou :password.

Paramètres non nommés : Utilisez un point d'interrogation ? pour représenter la valeur. Les valeurs dans la requête sont ensuite remplacées dans l'ordre où elles apparaissent dans le tableau.

Syntaxe des remplacements
Si vous passez un tableau, chaque ? dans la requête sera remplacé par les éléments dans l'ordre du tableau.
Si vous passez un objet, les clés de l'objet (:key) seront utilisées pour remplacer les paramètres nommés dans la requête.

Dans cet exemple, la requête utilise des paramètres nommés (:email et :password), et les valeurs sont passées dans un objet replacements.

Commandes
Installation et configuration
Installez les dépendances avec npm :

npm i
Lancer un conteneur Docker pour MySQL :

docker run --name some-mysql -p 5010:3306 -e MYSQL_DATABASE=demo -e MYSQL_ROOT_PASSWORD=password -d mysql:9
Tester la connexion à la base de données avec le fichier db.js :

node db.js
Tester l'injection avec le fichier testinjection.js :

node testinjection.js
# Liens utiles

https://sequelize.org/docs/v6/core-concepts/raw-queries/
https://johackim.com/sequelize?utm_source=rss&utm_medium=rss
https://sequelize.org/docs/v6/core-concepts/raw-queries/#bind-parameter