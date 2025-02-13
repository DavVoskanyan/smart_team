const { Model, DataTypes } = require('sequelize');


module.exports =  (sequelize) => {
    class UsersAndChatsRelation extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example:
            // this.belongsTo(models.User, { foreignKey: 'user_id' });
            // this.belongsTo(models.Notification, { foreignKey: 'notification_id' });
        }
    }

    UsersAndChatsRelation.init({
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        chat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        creation_date: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        modification_date: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
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
            modelName: 'UsersAndChatsRelation',
            tableName: 'users_and_chats_relation',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return UsersAndChatsRelation;
}
