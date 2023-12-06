const { Sequelize } = require('sequelize')
const database = require('../../db')

const calendar = database.define('scheduling', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    day: {
        type: Sequelize.STRING,
        allowNull: false
    },
    month: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    year: {
        type: Sequelize.STRING,
        allowNull: false
    },
    flag: {
        type: Sequelize.STRING,
        allowNull: false
    },
    client: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deletedAt: {
        type: Sequelize.DATE,
    }
})

module.exports = calendar