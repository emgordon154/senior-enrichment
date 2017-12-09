const studentRouter = require('express').Router()
const { Student, Campus } = require('../db/models')


studentRouter.get('/', (req, res, next) => {
  Student.findAll({include: Campus})
    .then(students => res.status(200).json(students))
    .catch(next)
})

studentRouter.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(foundStudent => res.status(200).json(foundStudent))
    .catch(next)
})

studentRouter.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(createdStudent => res.status(201).json(createdStudent))
    .catch(next)
})

studentRouter.put('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(foundStudent => foundStudent.update(req.body))
    .then(updatedStudent => res.status(200).json(updatedStudent))
    .catch(next)
})

studentRouter.delete('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(unwelcomeStudent => unwelcomeStudent.destroy())
    .then(() => res.status(200).send())
    .catch(next)
})

module.exports = studentRouter
