const studentRouter = require('express').Router()
const { Student } = require('../db')


studentRouter.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.status(200).send(students))
    .catch(next)
})

studentRouter.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(foundStudent => res.status(200).send(foundStudent))
    .catch(next)
})

studentRouter.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(createdStudent => res.status(201).send(createdStudent))
    .catch(next)
})

studentRouter.put('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(foundStudent => foundStudent.update(req.body))
    .then(updatedStudent => res.status(200).send(updatedStudent))
    .catch(next)
})

studentRouter.delete('/:studentId', (req, res, next) => {
  Student.destroy({
    where: {
      id: req.params.studentId
    }
  })
    .then(() => res.status(200).redirect('./'))
    .catch(next)
})
