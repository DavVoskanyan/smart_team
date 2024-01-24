const { DataTypes, Model } = require('sequelize');
import sequelize from '../databaseConnection';

class Account extends Model {}

Account.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_email_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        account_creation_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        avatar_image_file_name: {
            type: DataTypes.STRING,
        },
        avatar_background_color: {
            type: DataTypes.STRING,
        },
        is_online: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: 'Account',
        tableName: 'account',
        timestamps: false,
    }
);

module.exports = Account;
export default Account;