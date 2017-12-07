import Axios from 'axios'

let jokes = [
  {
    question: 'Why are you seeing this joke?',
    answer: 'Because the Axios request hasn\'t completed yet!'
  }
]

Axios.get('/joke')
  .then(res => res.data)
  .then(jokesFromServer => {
    jokes = jokesFromServer
  })
  .catch((error) => {
    console.log('uh oh lmao')
    console.error(error)
  })

function randomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)]
}

const initialJokeState = {
  joke: randomJoke(),
  answered: false
}

const NEXT_JOKE = 'NEXT_JOKE'
const ANSWER_JOKE = 'ANSWER_JOKE'

export const getNextJoke = () => {
  return {type: NEXT_JOKE}
}

export const answerJoke = () => {
  return {type: ANSWER_JOKE}
}

export default function reducer(jokeState = initialJokeState, action) {
  switch (action.type) {
    case ANSWER_JOKE: return {
      joke: jokeState.joke,
      answered: true
    }

    case NEXT_JOKE: return {
      joke: randomJoke(),
      answered: false
    }

    default: return jokeState
  }
}
