const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class PostComment extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.belongsTo(models.Post, { foreignKey: 'post_id' });
            // Example: this.belongsTo(models.User, { foreignKey: 'user_id' });
        }
    }

    PostComment.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            post_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            text: {
                type: DataTypes.TEXT,
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
            modelName: 'PostComment',
            tableName: 'post_comments',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return PostComment;
};
