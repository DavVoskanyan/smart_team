const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class RolePermission extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.belongsTo(models.Role, { foreignKey: 'role_id' });
        }
    }

    RolePermission.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            role_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            permission: {
                type: DataTypes.STRING(100),
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
            modelName: 'RolePermission',
            tableName: 'role_permissions',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return RolePermission;
};
