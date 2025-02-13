'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('colors', {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            red: {
                type: Sequelize.SMALLINT,
                allowNull: false,
                validate: {
                    min: 0,
                    max: 255,
                },
            },
            green: {
                type: Sequelize.SMALLINT,
                allowNull: false,
                validate: {
                    min: 0,
                    max: 255,
                },
            },
            blue: {
                type: Sequelize.SMALLINT,
                allowNull: false,
                validate: {
                    min: 0,
                    max: 255,
                },
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
        await queryInterface.dropTable('colors');
    }
};
