const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'pass',
    database: 'smart_team_database',
});

module.exports = sequelize;