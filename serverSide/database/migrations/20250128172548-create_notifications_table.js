'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('notifications', {
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
            text: {
                type: Sequelize.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            type_id: {
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

        // Add custom check constraints for trimming empty title and text
        await queryInterface.addConstraint('notifications', {
            fields: ['title'],
            type: 'check',
            where: {
                title: {
                    [Sequelize.Op.ne]: '', // Ensure title is not an empty string
                },
            },
        });

        await queryInterface.addConstraint('notifications', {
            fields: ['text'],
            type: 'check',
            where: {
                text: {
                    [Sequelize.Op.ne]: '', // Ensure text is not an empty string
                },
            },
        });
    },

    down: async () => {
        await queryInterface.dropTable('notifications');
    }
};
