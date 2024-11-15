const { DataTypes } = require('sequelize');
const sequelize = require('../index');

// Modèle User
const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  });


  module.exports = User;