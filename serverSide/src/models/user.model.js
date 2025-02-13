const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class User extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.hasMany(models.Post, { foreignKey: 'user_id' });
        }
    }

    User.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            first_name: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            last_name: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            is_verified: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true,
            },
            is_email_verified: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING(15),
                allowNull: true,
            },
            address: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            birthdate: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            profile_image_file: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            color_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            theme_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            description: {
                type: DataTypes.TEXT,
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
            modelName: 'User',
            tableName: 'users',
            timestamps: false, // Set to true if you want Sequelize to manage createdAt/updatedAt automatically
        }
    );
    return User;
};
