const Sequelize = require('sequelize');
const sequelize = require('./index.txt').sequelize;

const Interest = sequelize.define('interest', {
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
    },
    deletion_date: {
        type: Sequelize.DATE,
        allowNull: true,
    }
})

module.exports = Interest;