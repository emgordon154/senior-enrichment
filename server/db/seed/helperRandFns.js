
// returns a random integer in a range inclusive of both min and max
const randInt = (min, max) => {
  return Math.round( min + Math.floor( Math.random() * (max - min + 1) ) )
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
    gpa: randomGPA(),
    campusId: randInt(1, 6)
  }
}

const randomCampus = () => {
  return {
    name: randomName() + ' Academy',
    description: [...Array(100)].map( _ => randomName() ).join` `
  }
}

module.exports = { randomStudent, randomCampus }
