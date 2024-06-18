const Sequelize = require('sequelize');
const sequelize = require('../../sequelize.config');

const Theme = sequelize.define(
    'Theme',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'themes',
        timestamps: false
    }
);

module.exports = Theme;