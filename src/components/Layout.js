import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import GradeStats from './GradeStats'
import connect from "react-redux/es/connect/connect";
import SubjectHeader from "./SubjectHeader";
import SemesterButtons from "./SemesterButtons";
import { globalConstants } from '../utils/constants';
import { Divider } from 'semantic-ui-react';

const WrapperFlex = styled.div`
  font-family: Roboto,sans-serif;
  min-height: 100vh;
  margin: 0;
  background:#edf1f5;
`
const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  -webkit-flex-flow: column wrap;
  justify-content: space-around;
  padding: 108px 50px 50px 50px;

  @media (max-width: ${globalConstants.MAX_WIDTH}px) {
    padding: 108px 15px 15px 15px;
  }

  h1#title-header {
    text-align: center;
  
    @media (max-width: ${globalConstants.MAX_WIDTH}px) {
      font-size: 20px;
    }
  }
`
const FirstColumn = styled.div`
  flex: 50%;
`
const SecondColumn = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  @media (max-width: ${globalConstants.MAX_WIDTH}px) {
    flex-direction: column;
  }
`

class Layout extends Component {
  render () {
    return (
      <WrapperFlex>
        <Header />
        <StyledBody>
          <h1 id="title-header">Karakterfordeling fag ved NTNU</h1>
          {!this.props.items.subject && <p style={{textAlign: 'center'}}>Søk på emnekode i feltet over!</p>}
          <Divider></Divider>
          <FirstColumn>
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
