const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Role extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.belongsTo(models.Space, { foreignKey: 'space_id' });
        }
    }

    Role.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            space_id: {
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
            modelName: 'Role',
            tableName: 'roles',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return Role;
};
