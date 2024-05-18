const Sequelize = require('sequelize');
const sequelize = require('../../sequelize.config');

const Characteristic = sequelize.define(
    'Characteristic',
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
        is_deleted: {
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
        timestamps: false,
        tableName: 'characteristics',
    }
);

module.exports = Characteristic;