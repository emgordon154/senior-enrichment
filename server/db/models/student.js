const Sequelize = require('sequelize')
const db = require('../')

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  name: {
    type: Sequelize.VIRTUAL,
    get: function() {
      return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    },
  },
  gpa: {
    type: Sequelize.DECIMAL(2, 1)
  }
})

module.exports = Student
