'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_and_company_relation', {
      company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      department_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      creation_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      deletion_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_and_company_relation')
  }
};
