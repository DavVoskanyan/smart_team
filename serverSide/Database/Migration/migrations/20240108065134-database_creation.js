'use strict';

const DATABASE_NAME = 'smart_team_database';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createDatabase(DATABASE_NAME);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropDatabase(DATABASE_NAME);
  }
};
