const Sequelize = require('sequelize');
const sequelize = require('./index.txt').sequelize;

const isUserOnline = sequelize.define('isUserOnline', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    is_online: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    last_online_date: {
        type: Sequelize.DATE,
        allowNull: true,
    }
});

module.exports = isUserOnline;