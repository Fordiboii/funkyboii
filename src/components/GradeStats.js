import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Cell, Legend, Pie, PieChart, Tooltip} from 'recharts'
import {Card} from 'semantic-ui-react'

const COLORS = ["#fe0229", "#f06c00", "#ffd000", "#c6df5f", "#1c7dd5", "#d016ff"]

class GradeStats extends Component {
  render() {
    const subjectGrades = this.props.items.subjectGrades
    let data = []
    if(subjectGrades){
      data = [
        {name: 'A', value: subjectGrades[0].a},
        {name: 'B', value: subjectGrades[0].b},
        {name: 'C', value: subjectGrades[0].c},
        {name: 'D', value: subjectGrades[0].d},
        {name: 'E', value: subjectGrades[0].e},
        {name: 'F', value: subjectGrades[0].f}]
    }
    return (
        <Card hidden={data} color="grey">
          <PieChart width={300} height={300}>
            <Pie nameKey="name" dataKey="value" data={data} paddingAngle={3}
                 cx={"45%"} cy={"50%"} outerRadius={"70%"} label>
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
    items: state.SubjectReducer.items
  }
}

export default connect(mapStateToProps)(GradeStats)