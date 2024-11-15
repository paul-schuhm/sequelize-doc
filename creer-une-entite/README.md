##Lancer le docker pour la base de donnée

docker run --name some-mysql -p 5010:3306 -e MYSQL_DATABASE=demo -e MYSQL_ROOT_PASSWORD=password -d mysql:9

npm i

##puis pour initialiser la table USER
node app.js
