const Sequelize = require('sequelize');
const sequelize = require('../../sequelize.config');

const Interest = sequelize.define(
    'interest',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        deleted: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        deletion_date: {
            type: Sequelize.DATE,
            allowNull: true,
        }
    },
    {
        tableName: 'interests',
        timestamps: false,
    }
)

module.exports = Interest;