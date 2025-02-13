const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class UsersAndSpacesRelation extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example:
            // this.belongsTo(models.User, { foreignKey: 'user_id' });
            // this.belongsTo(models.Space, { foreignKey: 'space_id' });
        }
    }

    UsersAndSpacesRelation.init(
        {
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            space_id: {
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
            modelName: 'UsersAndSpacesRelation',
            tableName: 'users_and_spaces_relation',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return UsersAndSpacesRelation;
};
