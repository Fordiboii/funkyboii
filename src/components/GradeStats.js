import React, { Component } from 'react'
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis
} from 'recharts'

class GradeStats extends Component {
  render() {
    const data = [
      {x: 1, y: 100},
      {x: 2, y: 400},
      {x: 3, y: 300},
      {x: 4, y: 200},
    ];
    return (
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip/>
      </LineChart>
    )
  }
}

export default GradeStats