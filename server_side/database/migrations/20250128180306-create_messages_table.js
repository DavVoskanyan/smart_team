'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('messages', {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            sender_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            chat_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            text: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            is_response: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            response_to_message_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            is_forwarded: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            forwarded_from_chat_id: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('messages');
    }
};
