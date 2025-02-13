const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class UsersAndRolesRelation extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example:
            // this.belongsTo(models.User, { foreignKey: 'user_id' });
            // this.belongsTo(models.Role, { foreignKey: 'role_id' });
        }
    }

    UsersAndRolesRelation.init(
        {
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            role_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            creation_date: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            modification_date: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            deletion_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'UsersAndRolesRelation',
            tableName: 'users_and_roles_relation',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return UsersAndRolesRelation;
};
