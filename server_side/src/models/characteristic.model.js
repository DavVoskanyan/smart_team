const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Characteristic extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.belongsTo(models.User, { foreignKey: 'user_id' });
        }
    }

    Characteristic.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true, // Ensures the name field is not empty
                },
            },
            user_id: {
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
            modelName: 'Characteristic',
            tableName: 'characteristics',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return Characteristic;
};
