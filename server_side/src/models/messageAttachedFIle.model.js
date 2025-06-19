const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class MessageAttachedFile extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example:
            // this.belongsTo(models.Message, { foreignKey: 'message_id' });
        }
    }

    MessageAttachedFile.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            message_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            attached_file: {
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
            modelName: 'MessageAttachedFile',
            tableName: 'message_attached_files',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return MessageAttachedFile;
};
