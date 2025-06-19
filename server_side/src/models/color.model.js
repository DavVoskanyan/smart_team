const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Color extends Model {
        static associate(models) {
            // Define associations here, if any
        }
    }

    Color.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            red: {
                type: DataTypes.SMALLINT,
                allowNull: false,
                validate: {
                    min: 0,
                    max: 255,
                },
            },
            green: {
                type: DataTypes.SMALLINT,
                allowNull: false,
                validate: {
                    min: 0,
                    max: 255,
                },
            },
            blue: {
                type: DataTypes.SMALLINT,
                allowNull: false,
                validate: {
                    min: 0,
                    max: 255,
                },
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
            modelName: 'Color',
            tableName: 'colors',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return Color;
};
