'use strict';

const fs = require('fs');
const dbConfig = require('../config/database');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const logger = require('./../config/logger');

const sequelize = new Sequelize(dbConfig.url, {
    username: dbConfig.username,
    password: dbConfig.password,
    pool: dbConfig.pool,
    logging: (msg) => logger.info(msg),
});

const database = {};

fs.readdirSync(__dirname)
    .filter((file) => {
        return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        database[model.name] = model;
    });

Object.keys(database).forEach((modelName) => {
    if (database[modelName].associate) {
        database[modelName].associate(database);
    }
});

database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;