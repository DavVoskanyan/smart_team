'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('notification_types', {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            title: {
                type: Sequelize.STRING(255),
                allowNull: false,
                validate: {
                    notEmpty: true,
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

        // Add custom check constraint for trimming empty title
        await queryInterface.addConstraint('notification_types', {
            fields: ['title'],
            type: 'check',
            where: {
                title: {
                    [Sequelize.Op.ne]: '', // Ensure title is not an empty string
                },
            },
        });
    },

    down: async () => {
        await queryInterface.dropTable('notification_types');
    }
};
