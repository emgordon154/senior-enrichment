import Axios from 'axios'

const JOKES_LOADED = 'JOKES_LOADED'
const NEXT_JOKE = 'NEXT_JOKE'
const ANSWER_JOKE = 'ANSWER_JOKE'

const jokesLoaded = allJokes => ({
    type: JOKES_LOADED,
    allJokes
})

export const getJokesFromServer = () => (
  dispatch => (
    Axios.get('/api/joke')
      .then(res => res.data)
      .then(allJokes => dispatch(jokesLoaded(allJokes)))
      .catch(err => {
        console.log('uh oh lmao')
        console.error(err)
      })
  )
)

export const getNextJoke = () => {
  return {type: NEXT_JOKE}
}

export const answerJoke = () => {
  return {type: ANSWER_JOKE}
}

const randomJoke = jokes => jokes[Math.floor(Math.random() * jokes.length)]

const initialJokeState = {
  allJokes: [],
  joke: null,
  answered: false
}

export default function reducer(jokeState = initialJokeState, action) {
  switch (action.type) {
    case JOKES_LOADED: return {
      ...jokeState,
      joke: randomJoke(action.allJokes),
      allJokes: action.allJokes
    }

    case ANSWER_JOKE: return {
      ...jokeState,
      answered: true
    }

    case NEXT_JOKE: return {
      ...jokeState,
      joke: randomJoke(jokeState.allJokes),
      answered: false
    }

    default: return jokeState
  }
}
