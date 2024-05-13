const Sequelize = require('sequelize');
const sequelize = require('./index.txt').sequelize;

const Company = sequelize.define('Company', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    creation_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    deletion_date: {
        type: Sequelize.DATE,
        allowNull: true,
    }
});

module.exports = Company;