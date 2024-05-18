const Sequelize = require('sequelize');
const sequelize = require('../../sequelize.config');

const Company = sequelize.define(
    'Company',
    {
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
            defaultValue: Sequelize.NOW,
        },
        is_deleted: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        deletion_date: {
            type: Sequelize.DATE,
            allowNull: true,
        }
    },
    {
        timestamps: true,
        createdAt: 'creation_date',
        updatedAt: false,
        tableName: 'companies',
    }
);

module.exports = Company;