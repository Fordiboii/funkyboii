import {Button, Grid} from "semantic-ui-react";
import React, {Component} from "react";
import styled from "styled-components";
import connect from "react-redux/es/connect/connect";
import {activeSemesterButton} from "../actions/SubjectActions";

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`

const ButtonWrapper = styled.div`
  padding: 2px;
`

class SemesterButtons extends Component {
  render(){
    const subjectGrades = this.props.grades.subjectGrades
    return (
      <GridWrapper>
        <Grid columns={3}>
          <Grid.Row>
            {subjectGrades.map((o, index) =>
              <Grid.Column key={`grid-column-${index}`}>
                <ButtonWrapper>
                  <Button.Group vertical widths='1' size="mini">
                    <Button compact onClick={this.props.onClick}>{o.semester_code}</Button>
                  </Button.Group>
                </ButtonWrapper>
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </GridWrapper>
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