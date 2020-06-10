import {Button, Grid} from "semantic-ui-react";
import React, {Component} from "react";
import styled from "styled-components";
import connect from "react-redux/es/connect/connect";
import {activeSemesterButton} from "../actions/SubjectActions";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  //align: center
`

class SemesterButtons extends Component {
  render(){
    const subjectGrades = this.props.grades.subjectGrades
    return (
      <Grid columns={3}>
        <Grid.Row>
          {subjectGrades.map((o, index) =>
            <Grid.Column key={`grid-column-${index}`}>
              <ButtonWrapper>
                <Button onClick={this.props.onClick} size="mini">{o.semester_code}</Button>
              </ButtonWrapper>
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps (state) {
  return {
    grades: state.SubjectReducer.grades,
    loading: state.SubjectReducer.loading
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: (e, value) =>
      dispatch(activeSemesterButton(value["children"]))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SemesterButtons)