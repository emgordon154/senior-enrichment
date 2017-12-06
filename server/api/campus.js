const campusRouter = require('express').Router()
const { Campus } = require('../db')


campusRouter.get('/', (req, res, next) => {
  Campus.findAll()
    .then(allCampuses => res.status(200).send(allCampuses))
    .catch(next)
})

campusRouter.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(foundCampus => res.status(200).send(foundCampus))
    .catch(next)
})

campusRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(createdCampus => res.status(201).send(createdCampus))
    .catch(next)
})

campusRouter.put('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(foundCampus => foundCampus.update(req.body))
    .then(updatedCampus => res.status(200).send(updatedCampus))
    .catch(next)
})

campusRouter.delete('/:campusId', (req, res, next) => {
  Campus.destroy({
    where: {
      id: req.params.studentId
    }
  })
    .then(() => res.status(200).redirect('./'))
    .catch(next)
})

module.exports = campusRouter
