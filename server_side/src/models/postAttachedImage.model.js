const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class PostAttachedImage extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.belongsTo(models.Post, { foreignKey: 'post_id' });
        }
    }

    PostAttachedImage.init(
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
            image_name: {
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
            modelName: 'PostAttachedImage',
            tableName: 'post_attached_images',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return PostAttachedImage;
};
