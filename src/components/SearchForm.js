import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { fetchSubject, logSearch, updateSubject } from '../actions/SubjectActions'

function SearchForm (props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Input onChange={props.handleChange}
                  value={props.subjectCode} name='subjectCode'
                  placeholder='Search subject...'
                  action={{ type: 'submit', icon: 'search' }}
      />
    </Form>
  )
}
function mapStateToProps (state) {
  return ({
    subjectCode: state.subjectCode,
  }
  )
}
function mapDispatchToProps (dispatch) {
  return (
    {
      handleChange: (e, { name, value }) => {
        dispatch(updateSubject(value))
      },
      handleSubmit: (event) => {
        // Picks up the subjectCode field value from the DOM
        const subject = event.target.querySelectorAll('input[name="subjectCode"]')[0].value
        dispatch(logSearch(subject))
        dispatch(fetchSubject(subject))
      }
    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
