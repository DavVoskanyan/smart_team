'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('work_experience', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      work_start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      work_end_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('work_experience')
  }
};
