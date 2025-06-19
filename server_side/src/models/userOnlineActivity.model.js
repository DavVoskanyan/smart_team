const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class UserOnlineActivity extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.belongsTo(models.User, { foreignKey: 'user_id' });
        }
    }

    UserOnlineActivity.init(
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            is_online: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            last_online_date: {
                type: DataTypes.DATE,
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
            modelName: 'UserOnlineActivity',
            tableName: 'user_online_activity',
            timestamps: false, // Disable automatic timestamps as they are manually defined
        }
    );

    return UserOnlineActivity;
};
