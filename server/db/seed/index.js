
const db = require('../index.js')
const { Campus, Student } = require('../models/index.js')
const { randomStudent, randomCampus } = require('./helperRandFns')


// Neat little code golf trick I learned...
// You can spread an array of empties to get that many undefineds,
// which unlike empty spots are mappable!
const students = [...Array(100)].map( _ => randomStudent() )
const campuses = [...Array(6)].map( _ => randomCampus() )

db.sync({force: true})
  .then(() => Promise.all([
    Student.bulkCreate(students),
    Campus.bulkCreate(campuses)
  ]))
  .then(() => console.log('refresh Postico! :3c'))
  .catch(() => console.error('😱'))
