const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Theme extends Model {
        static associate(models) {
            // Define associations here, if any
        }
    }

    Theme.init(
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
            modelName: 'Theme',
            tableName: 'themes',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return Theme;
};
