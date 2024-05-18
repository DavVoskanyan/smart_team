const Sequelize = require('sequelize');
const sequelize = require('../../sequelize.config');

const Notification = sequelize.define(
    'Notification',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        text: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        event_start_date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        event_end_date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        is_full_day_event: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        type_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        company_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        creation_date: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    },
    {
        tableName: 'notifications',
        timestamps: true,
        createdAt: 'creation_date',
        updatedAt: false,
    }
);

exports.Notification = Notification;
