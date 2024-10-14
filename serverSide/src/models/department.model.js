const Sequelize = require('sequelize');
const sequelize = require('../../sequelize.config');

const Department = sequelize.define(
    'Department',
    {
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
            references: {
                model: 'Company',
                key: 'id',
            },
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
        tableName: 'departments',
        timestamps: true,
        createdAt: 'creation_date',
        updatedAt: false,
    }
);

module.exports = Department;