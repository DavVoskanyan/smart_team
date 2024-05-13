const Sequelize = require('sequelize');
const sequelize = require('./index.txt').sequelize;

const NotificationType = sequelize.define('NotificationType', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = NotificationType;