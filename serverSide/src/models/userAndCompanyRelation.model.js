const Sequelize = require('sequelize');
const sequelize = require('../../config/config.json');

const UserAndCompanyRelation = sequelize.define(
    'UserAndCompanyRelation',
    {
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        company_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Company',
                key: 'id',
            },
        },
        department_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Department',
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
        tableName: 'user_and_company_relations',
        timestamps: true,
        createdAt: 'created_date',
        updatedAt: false,
    }
);

module.exports = UserAndCompanyRelation;