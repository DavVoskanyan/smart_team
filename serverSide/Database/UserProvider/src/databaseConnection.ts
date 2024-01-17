const Sequelize = require('sequelize');

const sequelize = new Sequelize('smart_team_database', 'root', 'pass', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;