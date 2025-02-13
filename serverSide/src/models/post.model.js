const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Post extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.belongsTo(models.Space, { foreignKey: 'space_id' });
        }
    }

    Post.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            text: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            space_id: {
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
                defaultValue: false,
            },
            deletion_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'Post',
            tableName: 'posts',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return Post;
};
