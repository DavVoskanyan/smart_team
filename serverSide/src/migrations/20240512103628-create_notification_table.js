'use strict';

const Sequelize = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        await queryInterface.createTable('notifications', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            text: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            event_start_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            is_full_day_event: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            company_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            creation_date: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            }
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable('notifications');
    }
};
