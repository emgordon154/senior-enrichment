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

const WinterJokes = props => (
  <div>
    <h1 onClick={props.handleClick(props.answered)}>
      {props.joke.question}
    </h1>
    {props.answered && <h2>{props.joke.answer}</h2>}
  </div>
)

const WinterJokesContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(WinterJokes))

export default WinterJokesContainer
