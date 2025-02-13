'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('characteristics', {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            user_id: {
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

        // Add a custom check constraint for trimming empty names
        await queryInterface.addConstraint('characteristics', {
            fields: ['name'],
            type: 'check',
            where: {
                name: {
                    [Sequelize.Op.ne]: '', // Ensure name is not an empty string
                },
            },
        });
    },

    down: async () => {
        await queryInterface.dropTable('characteristics');
    }
};
