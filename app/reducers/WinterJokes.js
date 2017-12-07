import Axios from 'axios'

const JOKES_LOADED = 'JOKES_LOADED'
const NEXT_JOKE = 'NEXT_JOKE'
const ANSWER_JOKE = 'ANSWER_JOKE'

const jokesLoaded = allJokes => ({
    type: JOKES_LOADED,
    allJokes
})


export const getJokesFromServer = () => {
  return dispatch => {
    Axios.get('/api/joke')
      .then(res => res.data)
      .then(allJokes => dispatch(jokesLoaded(allJokes)))
      .catch(err => {
        console.log('uh oh lmao')
        console.error(err)
      })
  }
}


export const getNextJoke = () => {
  return {type: NEXT_JOKE}
}


export const answerJoke = () => {
  return {type: ANSWER_JOKE}
}

const randomJoke = jokes => jokes[Math.floor(Math.random() * jokes.length)]

const badJoke = {
  question: 'Why are you seeing this joke?',
  answer: 'The server isn\'t working properly!'
}

const initialJokeState = {
  allJokes: [badJoke],
  joke: badJoke,
  answered: false
}

export default function reducer(jokeState = initialJokeState, action) {
  switch (action.type) {
    case JOKES_LOADED: return {
      ...jokeState,
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
