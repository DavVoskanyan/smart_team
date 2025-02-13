const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class NotificationType extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.hasMany(models.Notification, { foreignKey: 'type_id' });
        }
    }

    NotificationType.init(
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
            modelName: 'NotificationType',
            tableName: 'notification_types',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return NotificationType;
};
