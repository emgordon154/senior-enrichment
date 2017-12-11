const { randomCampus } = require('./helperRandFns')


module.exports = [
  {
    name: 'Terra',
    imageUrl: '/img/earth-trans-640.png',
    description: `This campus is our oldest and least likely to
    experience micrometeorite impacts and depressurization incidents!
    ` + randomCampus().description
  },
  {
    name: 'Luna',
    imageUrl: '/img/moon-trans-640.png',
    description: randomCampus().description
  },
  {
    name: 'Sol',
    imageUrl: '/img/sun-trans-640.png',
    description: `Enjoy a summer learning retreat in our hottest program!
    Come to our solar outpost campus and work up a sweat studying retro web design!
    Learn PHP, <blink> tags,` + randomCampus().description
  },
  {
    name: 'Mars',
    imageUrl: '/img/mars-trans-640.png',
    description: `This is the campus where we send the men,
    you probably won't like it here. We try to make sure they don't.
    ` + randomCampus().description
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
