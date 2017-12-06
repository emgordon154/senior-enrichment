const Sequelize = require('sequelize')
const db = require('../')

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campus
