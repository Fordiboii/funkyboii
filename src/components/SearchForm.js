import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { fetchMovies, logSearch, updateTitle } from '../actions/MovieActions'

function SearchForm (props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Input onChange={props.handleChange}
        value={props.title} name='title'
        placeholder='Search NTNU subject code...'
        action={{ type: 'submit', icon: 'search' }}
      />
    </Form>
  )
}
function mapStateToProps (state) {
  return ({
    title: state.title,
    genre: state.genre
  }
  )
}
function mapDispatchToProps (dispatch) {
  return (
    {
      handleChange: (e, { name, value }) => {
        dispatch(updateTitle(value))
      },
      handleSubmit: (event) => {
        // Picks up the title field value from the DOM
        const title = event.target.querySelectorAll('input[name="title"]')[0].value
        dispatch(logSearch(title))
        dispatch(fetchMovies(title))
      }
    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
