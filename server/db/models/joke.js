const Sequelize = require('sequelize')
const db = require('../')

const Joke = db.define('joke', {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  topic: {
    type: Sequelize.STRING,
  }
})

module.exports = Joke
