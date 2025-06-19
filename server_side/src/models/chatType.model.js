const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class ChatType extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.hasMany(models.Chat, { foreignKey: 'chat_type_id' });
        }
    }

    ChatType.init(
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
            modelName: 'ChatType',
            tableName: 'chat_types',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return ChatType;
};
