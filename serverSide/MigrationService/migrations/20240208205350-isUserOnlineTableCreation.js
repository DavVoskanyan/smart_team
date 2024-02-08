'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('is_user_online', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      is_online: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('is_user_online');
  }
};
