const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Chat extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.belongsTo(models.ChatType, { foreignKey: 'chat_type_id' });
            // Example: this.belongsTo(models.User, { foreignKey: 'creator_id' });
        }
    }

    Chat.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            chat_type_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            creator_id: {
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
            modelName: 'Chat',
            tableName: 'chats',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return Chat;
};
