// id integer [primary key]
// user_id integer
// company_name string
// position_name string
// work_start_date timestamp
// work_end_date timestamp

const Sequelize = require('sequelize');
const sequelize = require('../../sequelize.config');

const Experience = sequelize.define(
    'Experience',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        position: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        work_start_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        work_end_date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        user_id: {
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
        tableName: 'experiences',
        timestamps: true,
        createdAt: 'creation_date',
        updatedAt: false,
    }
);

module.exports = Experience;