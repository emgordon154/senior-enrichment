const campusRouter = require('express').Router()
const { Campus } = require('../db')


campusRouter.get('/', (req, res, next) => {
  Campus.findAll()
    .then(allCampuses => res.status(200).json(allCampuses))
    .catch(next)
})

campusRouter.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(foundCampus => res.status(200).json(foundCampus))
    .catch(next)
})

campusRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(createdCampus => res.status(201).json(createdCampus))
    .catch(next)
})

campusRouter.put('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(foundCampus => foundCampus.update(req.body))
    .then(updatedCampus => res.status(200).json(updatedCampus))
    .catch(next)
})

campusRouter.delete('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(condemnedCampus => condemnedCampus.destroy())
    .then(() => res.status(200).redirect('./'))
    .catch(next)
})

module.exports = campusRouter
