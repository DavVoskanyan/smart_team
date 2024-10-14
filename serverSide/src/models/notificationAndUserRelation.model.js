const Sequelize = require('sequelize');
const sequelize = require('../../config/config.json');

const NotificationAndUserRelation = sequelize.define(
    'NotificationAndUserRelation',
    {
        notification_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Notification',
                key: 'id',
            },
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            },
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