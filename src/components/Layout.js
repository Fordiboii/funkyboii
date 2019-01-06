import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import GradeStats from './GradeStats'
import connect from "react-redux/es/connect/connect";
import SubjectHeader from "./SubjectHeader";
import SemesterButtons from "./SemesterButtons";

const WrapperFlex = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto,sans-serif;
  min-height: 100vh;
  margin:0;
  background:#edf1f5;
`

const StyledBody = styled.div`
  flex: 1;
  display:flex;
  flex-direction:column;
  align-items: center;
  height: 100%;
  padding: 108px 50px 50px 50px;
  @media (max-width: 860px){
    padding: 78px 20px 20px 20px;
  }
  >  * {
    margin-bottom: 50px;
  }
`

class Layout extends Component {
  render () {
    return (
      <WrapperFlex>
        <Header />
        <StyledBody>
          <h1>Grade stats</h1>
          {this.props.items.subject && <SubjectHeader/>}
          {this.props.grades.subjectGrades && <GradeStats/>}
          {this.props.grades.subjectGrades && <SemesterButtons/>}
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
