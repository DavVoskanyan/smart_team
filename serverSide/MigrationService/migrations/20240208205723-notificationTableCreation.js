'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('notifications', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      event_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      is_full_day_event: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      creation_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('notifications');
  }
};
