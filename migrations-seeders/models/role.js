'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {

    static associate(models) {
      Role.hasMany(models.User, { foreignKey: 'role' });
      Role.hasMany(models.RolePermission, { foreignKey: 'role' });
    }
  }
  Role.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });

  // CRUD
  Role.createRole = async function(roleData) {
    return await Role.create(roleData);
  };

  Role.getRoleById = async function(id) {
    return await Role.findByPk(id);
  };

  Role.updateRole = async function(id, roleData) {
    return await Role.update(roleData, { where: { id: id } });
  };

  Role.deleteRole = async function(id) {
    return await Role.destroy({ where: { id: id } });
  };

  return Role;
};