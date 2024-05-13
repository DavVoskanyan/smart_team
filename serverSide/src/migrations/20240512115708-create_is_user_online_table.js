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

        await queryInterface.createTable('are_users_online', {
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            is_online: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            last_online_date: {
                type: Sequelize.DATE,
                allowNull: true,
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

        await queryInterface.dropTable('are_users_online')
    }
};
