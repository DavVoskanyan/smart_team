const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class PostLike extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.belongsTo(models.Post, { foreignKey: 'post_id' });
            // Example: this.belongsTo(models.User, { foreignKey: 'user_id' });
        }
    }

    PostLike.init(
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
            modelName: 'PostLike',
            tableName: 'post_likes',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return PostLike;
};
