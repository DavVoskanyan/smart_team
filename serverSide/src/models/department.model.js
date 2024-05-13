const Sequelize = require('sequelize');
const sequelize = require('./index.txt').sequelize;

const Department = sequelize.define('Department', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    company_id: {
        type: Sequelize.INTEGER,
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

module.exports = Department;