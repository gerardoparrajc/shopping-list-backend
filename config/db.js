const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'shopping-list.sqlite3'
});

module.exports = db;