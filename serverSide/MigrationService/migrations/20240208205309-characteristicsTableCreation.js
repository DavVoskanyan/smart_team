'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('characteristics', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('characteristics')
  }
};
