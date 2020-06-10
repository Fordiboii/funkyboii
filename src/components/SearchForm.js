import React from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";
import {
  fetchSubject,
  fetchSubjectGrades,
  logSearch,
  updateSubject,
} from "../actions/SubjectActions";
import styled from 'styled-components'

const FormWrapper = styled.div`
.ui.form > div {
    display: flex;
  }
`

const SearchForm = (props) => {
  const { handleSubmit, handleChange, subjectCode } = props;

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          id='form-input-control-error-email'
          onChange={handleChange}
          value={subjectCode}
          name="subjectCode"
          placeholder="Skriv inn emnekode..."
          action={{ type: "submit", icon: "search" }}
          error={{
            content: "Skriv inn en gyldig emnekode",
            pointing: "left",
          }}
        />
      </Form>
    </FormWrapper>
  );
};

function mapStateToProps(state) {
  return {
    subjectCode: state.subjectCode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange: (_e, { _name, value }) => {
      dispatch(updateSubject(value));
    },
    handleSubmit: (event) => {
      // Picks up the subjectCode field value from the DOM
      const subject = event.target.querySelectorAll(
        'input[name="subjectCode"]'
      )[0].value;
      if (subject === undefined || subject === "") {
        return false;
      } else {
        dispatch(logSearch(subject));
        dispatch(fetchSubject(subject));
        dispatch(fetchSubjectGrades(subject));
      }
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
