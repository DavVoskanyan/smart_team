const Sequelize = require('sequelize');
const sequelize = require('../../config/config.json');

const NotificationAndUserRelation = sequelize.define(
    'NotificationAndUserRelation',
    {
        notification_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        creation_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        }
    },
    {
        tableName: 'notification_and_user_relations',
        timestamps: true,
        createdAt: 'creation_date',
        updatedAt: false,
    }
);

module.exports = NotificationAndUserRelation;