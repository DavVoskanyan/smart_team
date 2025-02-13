'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users_and_notifications_relation', {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            notification_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            notification_seen_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            creation_date: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            modification_date: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
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
        });
    },

    down: async () => {
        await queryInterface.dropTable('users_and_notifications_relation');
    }
};
