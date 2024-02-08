'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('departments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_id: {
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
    await queryInterface.dropTable('departments');
  }
};
