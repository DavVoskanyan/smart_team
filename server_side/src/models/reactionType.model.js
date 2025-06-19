const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class ReactionType extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example:
            // this.hasMany(models.MessageReaction, { foreignKey: 'reaction_type_id' });
        }
    }

    ReactionType.init(
        {
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
            modelName: 'ReactionType',
            tableName: 'reaction_types',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return ReactionType;
};
