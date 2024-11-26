'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    static associate(models) {
      Permission.hasMany(models.RolePermission, { foreignKey: 'permission' });
    }
  }
  Permission.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permission',
  });

  // CRUD 
  Permission.createPermission = async function(permissionData) {
    return await Permission.create(permissionData);
  };

  Permission.getPermissionById = async function(id) {
    return await Permission.findByPk(id);
  };

  Permission.updatePermission = async function(id, permissionData) {
    return await Permission.update(permissionData, { where: { id: id } });
  };

  Permission.deletePermission = async function(id) {
    return await Permission.destroy({ where: { id: id } });
  };

  return Permission;
};