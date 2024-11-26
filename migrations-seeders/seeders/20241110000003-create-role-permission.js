
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RolePermissions', [
      {
        role: 1,
        permission: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: 1, // Admin
        permission: 2, // WRITE
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: 1, // Admin
        permission: 3, // DELETE
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: 2, // User
        permission: 1, // READ
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('RolePermissions', null, {});
  },
};