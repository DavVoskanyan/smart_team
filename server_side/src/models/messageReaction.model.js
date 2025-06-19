const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class MessageReaction extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example:
            // this.belongsTo(models.Message, { foreignKey: 'message_id' });
            // this.belongsTo(models.User, { foreignKey: 'user_id' });
            // this.belongsTo(models.ReactionType, { foreignKey: 'reaction_type_id' });
        }
    }

    MessageReaction.init(
        {
            message_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            reaction_type_id: {
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
            modelName: 'MessageReaction',
            tableName: 'message_reactions',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return MessageReaction;
};
