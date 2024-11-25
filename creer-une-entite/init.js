const Sequelize = require("sequelize");

const sequelize = new Sequelize("demo", "root", "password", {
  host: "127.0.0.1",
  port: 5010,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
module.exports = sequelize;
