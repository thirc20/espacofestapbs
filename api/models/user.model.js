const Sequelize = require('sequelize');
const database = require('../../db');
 
const user = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deletedAt: {
        type: Sequelize.DATE,
    }
})
 
module.exports = user;