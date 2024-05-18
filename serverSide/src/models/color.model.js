const Sequelize = require('sequelize');
const sequelize = require('../../sequelize.config');

const Color = sequelize.define(
    'Color',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        main_hex: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        main_hex_interacted: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        secondary_hex: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        secondary_hex_interacted: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'colors',
        timestamps: false,
    }
);

module.exports = Color;