const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class UsersAndNotificationsRelation extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example:
            // this.belongsTo(models.User, { foreignKey: 'user_id' });
            // this.belongsTo(models.Notification, { foreignKey: 'notification_id' });
        }
    }

    UsersAndNotificationsRelation.init(
        {
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            notification_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            notification_seen_date: {
                type: DataTypes.DATE,
                allowNull: true,
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
            modelName: 'UsersAndNotificationsRelation',
            tableName: 'users_and_notifications_relation',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return UsersAndNotificationsRelation;
};
