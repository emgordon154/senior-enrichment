import randomJoke from './jokes'


const NEXT_JOKE = 'NEXT_JOKE'
const ANSWER_JOKE = 'ANSWER_JOKE'

let initialJokeState = {
  joke: randomJoke(),
  answered: false
}

export default function reducer(jokeState = initialJokeState, action) {
  switch (action.type) {
    case ANSWER_JOKE: return {
      answered: true
    }

    case NEXT_JOKE: return {
      joke: randomJoke(),
      answered: false
    }

    default: return jokeState
  }
}
