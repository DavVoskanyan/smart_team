const Sequelize = require('sequelize');
const sequelize = require('../../sequelize.config');

const NotificationType = sequelize.define(
    'NotificationType',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    },
    {
        tableName: 'notification_types',
        timestamps: false,
    }
);

module.exports = NotificationType;