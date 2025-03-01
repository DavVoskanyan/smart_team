'use strict';

const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/config/config.json`)[env];

let sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;