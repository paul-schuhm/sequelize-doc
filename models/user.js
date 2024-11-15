'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.belongsTo(models.Role, { foreignKey: 'role' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });

  // CRUD
  User.createUser = async function(userData) {
    return await User.create(userData);
  };

  User.getUserById = async function(id) {
    return await User.findByPk(id);
  };

  User.updateUser = async function(id, userData) {
    return await User.update(userData, { where: { id: id } });
  };

  User.deleteUser = async function(id) {
    return await User.destroy({ where: { id: id } });
  };

  return User;
};