'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        await queryInterface.createTable('colors', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            main_hex: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            main_hex_interacted: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            secondary_hex: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            secondary_hex_interacted: {
                type: Sequelize.STRING,
                allowNull: false,
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

        await queryInterface.dropTable('colors');
    }
};
