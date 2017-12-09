import React from 'react'
import { connect } from 'react-redux'
import { getJokesFromServer, getNextJoke, answerJoke } from '../reducers/WinterJokes'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {...state.jokeState}
}

const mapDispatchToProps = (dispatch) => {
  dispatch(getJokesFromServer())
  return {
    handleClick: answered => {
      return answered ? () => dispatch(getNextJoke())
                      : () => dispatch(answerJoke())
    }
  }
}

const emojify = joke => joke.replace(/O/ig, '😂') // ;)

const WinterJokes = props => ( props.joke &&
  <div id="jokes">
    <p id="joke-intro">It's winter back on Earth! Maybe some jokes about the cold season will warm up your soul in the cold vacuum of space!</p>
    <h1 onClick={props.handleClick(props.answered)} id="joke-question">
      {props.joke.question}
    </h1>
    {props.answered && <h2 id="joke-answer">{emojify(props.joke.answer)}</h2>}
  </div>
)

const WinterJokesContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(WinterJokes))

export default WinterJokesContainer
