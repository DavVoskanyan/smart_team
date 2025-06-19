const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Notification extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.belongsTo(models.NotificationType, { foreignKey: 'type_id' });
        }
    }

    Notification.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING(255),
                allowNull: false,
                validate: {
                    notEmpty: true, // Ensures the title field is not empty
                },
            },
            text: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: true, // Ensures the text field is not empty
                },
            },
            type_id: {
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
            modelName: 'Notification',
            tableName: 'notifications',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return Notification;
};
