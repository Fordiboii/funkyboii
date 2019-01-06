import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Cell, Legend, Pie, PieChart, Tooltip} from 'recharts'
import {Card, Header} from 'semantic-ui-react'
import styled from 'styled-components'

const COLORS = ["#c6df5f", "#ffd000", "#1c7dd5", "#d016ff", "#f06c00", "#fe0229"]
const HeaderWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 0
  padding-left: 15px;
  padding-right: 15px;
`
const PieChartWrapper = styled.div`
  display: flex;
  padding-top: 0;
`

class GradeStats extends Component {
  render() {
    const subjectGrades = this.props.grades.subjectGrades
    let data = []
    let index = 0
    if(this.props.activeSemester !== 0){
      index = subjectGrades.findIndex(x => x.semester_code === this.props.activeSemester)
    }
    if(subjectGrades){
      data = [
        {name: 'A', value: subjectGrades[index].a},
        {name: 'B', value: subjectGrades[index].b},
        {name: 'C', value: subjectGrades[index].c},
        {name: 'D', value: subjectGrades[index].d},
        {name: 'E', value: subjectGrades[index].e},
        {name: 'F', value: subjectGrades[index].f}]
    }
    return (
      <Card loading={this.props.loading} color="grey">
        <HeaderWrapper>
          <Header as="h3" dividing="true" align="center">{subjectGrades[index].semester_code}</Header>
        </HeaderWrapper>
        <PieChartWrapper>
          <PieChart width={300} height={300}>
          <Pie nameKey="name" dataKey="value" data={data} paddingAngle={5}
               cx={"45%"} cy={"50%"} innerRadius={"50%"} outerRadius={"70%"} label>
              {
                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
          </Pie>
          <Tooltip/>
          <Legend layout="vertical" align="right" verticalAlign="middle" iconType="circle"/>
          </PieChart>
        </PieChartWrapper>
      </Card>
    )
  }
}

function mapStateToProps (state) {
  return {
    grades: state.SubjectReducer.grades,
    items: state.SubjectReducer.items,
    loading: state.SubjectReducer.loading,
    activeSemester: state.SubjectReducer.activeSemester
  }
}

export default connect(mapStateToProps)(GradeStats)