import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const renderLineChart = (passed) => (
  console.log(passed.searches),
  <LineChart width={600} height={300} data={passed}>
    <Line type="monotone" dataKey="searches" stroke="#000000" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
export default renderLineChart;
