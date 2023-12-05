const Sequelize = require('sequelize');

const sequelizedb = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  })

module.exports = sequelizedb;