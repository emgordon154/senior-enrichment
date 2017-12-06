// import db, { Campus, Student } from './index.js'

const db = require('./models/index.js')
const Campus = require('./models/campus')
const Student = require('./models/student')

// returns a random integer in a range inclusive of both min and max
const randInt = (min, max) => {
  return Math.round( min + Math.floor( Math.random() * (max + 1) ) )
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const randomLetter = () => {
  return alphabet[randInt(0, 25)]
}


// const alphanumerics = alphabet + '0123456789'

// const randomAlphanumeric = () => {
//   return alphanumerics[randInt(0,35)]
// }


// const symbolsAllowedInEmail = '-_.'

// const randomSymbolAllowedInEmail = () => {
//   return symbolsAllowedInEmail[randInt(0,3)]
// }


const randomName = () => {
  let name = randomLetter().toUpperCase()
  let howManyMoreLetters = randInt(1, 9)
  while (howManyMoreLetters--) name += randomLetter()
  return name
}

const randomEmail = () => {
  return randomName() + randInt(0, 999).toString() + '@' + randomName() + '.com'
}

const randomGPA = () => {
  return randInt(0, 3) + randInt(0, 10) / 10
}

const randomStudent = () => {
  return {
    firstName: randomName(),
    lastName: randomName(),
    email: randomEmail(),
    gpa: randomGPA()
  }
}

const randomCampus = () => {
  return {
    name: randomName() + ' Academy '
  }
}

// Neat little code golf trick I learned...
// You can spread an array of empties to get that many undefineds!
const students = [...Array(100)].map( _ => randomStudent() )

const campuses = [...Array(6)].map( _ => randomCampus() )

db.sync({force: true})
  .then(() => Student.bulkCreate(students))
  .then(() => console.log('refresh Postico and check out the students!'))
  .then(() => Campus.bulkCreate(campuses))
  .then(() => console.log('and campuses too!'))
  .catch(() => console.error('😱'))

