'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    static associate(models) {
      RolePermission.belongsTo(models.Role, { foreignKey: 'role' });
      RolePermission.belongsTo(models.Permission, { foreignKey: 'permission' });
    }
  }
  RolePermission.init({
    role: DataTypes.INTEGER,
    permission: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RolePermission',
  });

  //CRUD
  RolePermission.createRolePermission = async function(rolePermissionData) {
    return await RolePermission.create(rolePermissionData);
  };

  RolePermission.getRolePermissionById = async function(id) {
    return await RolePermission.findByPk(id);
  };

  RolePermission.updateRolePermission = async function(id, rolePermissionData) {
    return await RolePermission.update(rolePermissionData, { where: { id: id } });
  };

  RolePermission.deleteRolePermission = async function(id) {
    return await RolePermission.destroy({ where: { id: id } });
  };

  return RolePermission;
};