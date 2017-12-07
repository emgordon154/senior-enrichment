const jokeRouter = require('express').Router()
const { Joke } = require('../db/models')

jokeRouter.get('/', (req, res, next) => {
  Joke.findAll()
    .then(jokes => res.status(200).json(jokes))
    .catch(next)
})

module.exports = jokeRouter
