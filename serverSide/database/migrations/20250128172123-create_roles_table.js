'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('roles', {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            space_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
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
        await queryInterface.dropTable('roles');
    }
};
