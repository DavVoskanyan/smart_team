const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Message extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example:
            // this.belongsTo(models.User, { foreignKey: 'sender_id' });
            // this.belongsTo(models.Chat, { foreignKey: 'chat_id' });
            // this.belongsTo(models.Message, { foreignKey: 'response_to_message_id', as: 'responseTo' });
            // this.belongsTo(models.Chat, { foreignKey: 'forwarded_from_chat_id', as: 'forwardedFromChat' });
        }
    }

    Message.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            sender_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            chat_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            text: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            is_response: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            response_to_message_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            is_forwarded: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            forwarded_from_chat_id: {
                type: DataTypes.INTEGER,
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
            modelName: 'Message',
            tableName: 'messages',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return Message;
};
