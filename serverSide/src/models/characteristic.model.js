import Sequelize from 'sequelize';
import sequelize from '../../sequelize.config';

const Characteristic = sequelize.define('Characteristic', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    deletion_date: {
        type: Sequelize.DATE,
        allowNull: true,
    }
});

module.exports = Characteristic;