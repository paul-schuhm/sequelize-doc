
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Permissions', [
      {
        name: 'READ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'WRITE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'DELETE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Permissions', null, {});
  },
};