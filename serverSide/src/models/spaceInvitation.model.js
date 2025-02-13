const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class SpaceInvitation extends Model {
        static associate(models) {
            // Define associations here, if any
            // Example: this.belongsTo(models.User, { foreignKey: 'user_id' });
            // Example: this.belongsTo(models.Space, { foreignKey: 'space_id' });
            // Example: this.belongsTo(models.User, { foreignKey: 'inviter_id', as: 'inviter' });
        }
    }

    SpaceInvitation.init(
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
            space_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            inviter_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            expiration_date: {
                type: DataTypes.DATE,
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
            modelName: 'SpaceInvitation',
            tableName: 'space_invitations',
            timestamps: false, // Disable automatic timestamps
        }
    );

    return SpaceInvitation;
};
