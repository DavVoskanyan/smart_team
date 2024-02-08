'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createDatabase('smart_team_database');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropDatabase('smart_team_database');
  }
};
