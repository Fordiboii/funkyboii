import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Cell, Legend, Pie, PieChart, Tooltip} from 'recharts'
import {Card} from 'semantic-ui-react'

const COLORS = ["#c6df5f", "#ffd000", "#1c7dd5", "#d016ff", "#f06c00", "#fe0229"]

class GradeStats extends Component {
  render() {
    const subjectGrades = this.props.grades.subjectGrades
    let data = []
    if(subjectGrades){
      data = [
        {name: 'A', value: subjectGrades[subjectGrades.length-1].a},
        {name: 'B', value: subjectGrades[subjectGrades.length-1].b},
        {name: 'C', value: subjectGrades[subjectGrades.length-1].c},
        {name: 'D', value: subjectGrades[subjectGrades.length-1].d},
        {name: 'E', value: subjectGrades[subjectGrades.length-1].e},
        {name: 'F', value: subjectGrades[subjectGrades.length-1].f}]
    }
    return (
      <Card loading={this.props.loading} color="grey">
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
      </Card>
    )
  }
}

function mapStateToProps (state) {
  return {
    grades: state.SubjectReducer.grades,
    items: state.SubjectReducer.items,
    loading: state.SubjectReducer.loading
  }
}

export default connect(mapStateToProps)(GradeStats)