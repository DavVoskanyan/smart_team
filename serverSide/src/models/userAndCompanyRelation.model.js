const Sequelize = require('sequelize');
const sequelize = require('../../config/config.json');

const UserAndCompanyRelation = sequelize.define(
    'UserAndCompanyRelation',
    {
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        company_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        department_id: {
            type: Sequelize.INTEGER,
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
        tableName: 'user_and_company_relations',
        timestamps: true,
        createdAt: 'created_date',
        updatedAt: false,
    }
);

module.exports = UserAndCompanyRelation;