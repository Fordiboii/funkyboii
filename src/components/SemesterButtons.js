import {Button, Grid} from "semantic-ui-react";
import React, {Component} from "react";
import styled from "styled-components";
import connect from "react-redux/es/connect/connect";
import {activeSemesterButton} from "../actions/SubjectActions";
import {globalConstants} from "../utils/constants";

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;

  @media (max-width: ${globalConstants.MAX_WIDTH}px) {
    width: 100%;  
  }

  div.ui.grid.three.column.grid {
    @media (max-width: ${globalConstants.MAX_WIDTH}px) {
      width: 85%;  
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px;
`

class SemesterButtons extends Component {
  getButtonSize() {
    const innerWidth = window.innerWidth
    const MINI = 'mini'
    const TINY = 'tiny'
    if (innerWidth < Number(globalConstants.MAX_WIDTH)) {
      return TINY
    } else {
      return MINI
    }
  }
  
  render(){
    let buttonSize = 'mini'
    buttonSize = this.getButtonSize()

    const subjectGrades = this.props.grades.subjectGrades
    return (
      <GridWrapper>
        <Grid columns={3}>
          <Grid.Row>
            {subjectGrades.map((o, index) =>
              <Grid.Column key={`grid-column-${index}`}>
                <ButtonWrapper>
                  <Button.Group vertical widths='1' size={buttonSize}>
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