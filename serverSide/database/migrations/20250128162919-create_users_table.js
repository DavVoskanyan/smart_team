'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            first_name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            last_name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            is_verified: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            email: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },
            is_email_verified: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            phone: {
                type: Sequelize.STRING(15),
                allowNull: true,
            },
            address: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            birthdate: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            profile_image_file: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            color_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            theme_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
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

    async down() {
        await queryInterface.dropTable('users');
    }
};
