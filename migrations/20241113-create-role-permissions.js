'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RolePermissions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
          model: 'Roles',   
          key: 'id'         // Clé primaire de la table 'Roles'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      permission: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
          model: 'Permissions',  
          key: 'id'              // Clé primaire de la table 'Permissions'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('RolePermissions');
  }
};
