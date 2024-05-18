const Sequelize = require('sequelize');
const sequelize = require('../../sequelize.config');

const isUserOnline = sequelize.define(
    'isUserOnline',
    {
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        is_online: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        last_online_date: {
            type: Sequelize.DATE,
            allowNull: true,
        }
    },
    {
        tableName: 'are_users_online',
        timestamps: false,
    }
);

module.exports = isUserOnline;