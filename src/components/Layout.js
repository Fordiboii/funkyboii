import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import GradeStats from './GradeStats'
import connect from "react-redux/es/connect/connect";
import SubjectHeader from "./SubjectHeader";
import SemesterButtons from "./SemesterButtons";

const WrapperFlex = styled.div`
  font-family: Roboto,sans-serif;
  min-height: 100vh;
  margin:0;
  background:#edf1f5;
`
const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  -webkit-flex-flow: column wrap;
  justify-content: space-around;
  padding: 108px 50px 50px 50px;
`
const FirstColumn = styled.div`
  flex: 50%;
`
const SecondColumn = styled.div`
  flex: 50%;
`

class Layout extends Component {
  render () {
    return (
      <WrapperFlex>
        <Header />
        <StyledBody>
          <h1 style={{textAlign: 'center'}}>Karakterfordeling fag ved NTNU</h1>
          <FirstColumn>
          {!this.props.items.subject && <p style={{textAlign: 'center'}}>Søk på emnekode i feltet over!</p>}
          {this.props.items.subject && <SubjectHeader/>}
          </FirstColumn>
          <SecondColumn>
          {this.props.grades.subjectGrades && <GradeStats/>}
          {this.props.grades.subjectGrades && <SemesterButtons/>}
          </SecondColumn>
        </StyledBody>
      </WrapperFlex >
    )
  }
}

function mapStateToProps (state) {
  return {
    items: state.SubjectReducer.items,
    grades: state.SubjectReducer.grades
  }
}

export default connect(mapStateToProps)(Layout)
