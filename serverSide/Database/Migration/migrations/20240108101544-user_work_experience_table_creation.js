'use strict';

const TABLE_NAME = 'work_experience';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Account',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLE_NAME);
  }
};
