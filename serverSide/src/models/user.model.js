const Sequelize = require('sequelize');
const sequelize = require('../../sequelize.config');

const User = sequelize.define(
    'User',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        birthdate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        is_email_verified: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '',
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '',
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '',
        },
        avatar_image_file: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '',
        },
        avatar_background_color_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Color',
                key: 'id',
            },
        },
        theme_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Theme',
                key: 'id',
            },
        },
        is_super_user: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        creation_date: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: Sequelize.NOW,
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
    },
    {
        tableName: 'users',
        timestamps: true,
        createdAt: 'creation_date',
        updatedAt: false,
    }
);


module.exports = User;