const Sequelize = require('sequilize');
const dbConfig = require('..config/database');

const connection = new Sequelize(dbConfig);

module.exports = connection;