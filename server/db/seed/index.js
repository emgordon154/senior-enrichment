
const db = require('../index.js')
const { Campus, Student, Joke } = require('../models/')
const { randomStudent, randomCampus } = require('./helperRandFns')


// Neat little code golf trick I learned...
// You can spread an array of empties to get that many undefineds,
// which unlike empty spots are mappable!
const students = [...Array(100)].map( _ => randomStudent() )
// const campuses = [...Array(6)].map( _ => randomCampus() )
const campuses = [
  {
    name: 'Terra',
    imageUrl: '/img/earth-trans-640.png',
    description: randomCampus().description
  },
  {
    name: 'Luna',
    imageUrl: '/img/moon-trans-640.png',
    description: randomCampus().description
  },
  {
    name: 'Sol',
    imageUrl: '/img/sun-trans-640.png',
    description: randomCampus().description
  },
  {
    name: 'Mars',
    imageUrl: '/img/mars-trans-640.png',
    description: randomCampus().description
  },
  {
    name: 'Venus',
    imageUrl: '/img/venus-trans-640.png',
    description: randomCampus().description
  },
  {
    name: 'Jupiter',
    imageUrl: '/img/jupiter-trans-640.png',
    description: randomCampus().description
  }
]

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
