
const db = require('../index.js')
const { Campus, Student, Joke } = require('../models/')
const { randomStudent/*, randomCampus */} = require('./helperRandFns')
const campuses = require('./campus')

// Neat little code golf trick I learned...
// You can spread an array of empties to get that many undefineds,
// which unlike empty spots are mappable!
const students = [...Array(100)].map( _ => randomStudent() )
// const campuses = [...Array(6)].map( _ => randomCampus() )

const jokes = require('./joke')

db.sync({force: true})
  .then(() => Promise.all([
    Campus.bulkCreate(campuses),
    Joke.bulkCreate(jokes)
  ]))
  // Must create campuses before students to avoid invalid foreign keys!
  .then(() => Student.bulkCreate(students))
  .then(() => console.log('refresh Postico! :3c'))
  .catch((err) => {
    console.log('😱')
    console.error(err)
  })
