const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Space extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.belongsTo(models.User, { foreignKey: 'owner_id' });
        }
    }

    Space.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            owner_id: {
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
            modelName: 'Space',
            tableName: 'spaces',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return Space;
};
