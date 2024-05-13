const Sequelize = require('sequelize');
const sequelize = require('./index.txt').sequelize;

const User = sequelize.define('User', {
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
    },
    is_email_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    avatar_image_file: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    avatar_background_color_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    theme_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    creation_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    deletion_date: {
        type: Sequelize.DATE,
        allowNull: true,
    },
});

module.exports = User;