import * as React from "react";
import '../styles/charts/LineChart.css'
import { LineChart, Line, XAxis } from "recharts";

const data = [
  {
    name: "L",
    pv: 3400
  },
  {
    name: "M",
    pv: 1398
  },
  {
    name: "M",
    pv: 5800
  },
  {
    name: "J",
    pv: 3908
  },
  {
    name: "V",
    pv: 7800
  },
  {
    name: "S",
    pv: 1800
  },
  {
    name: "D",
    pv: 8800
  }
];

const LineCharts = () => {
  return (
    <div className="linechart-ui">
      <span>Durée moyenne des sessions</span>
      <LineChart width={300} height={200} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={2} />
        <XAxis dataKey="name" axisLine={false} stroke="#fff" tickLine={false} />
      </LineChart>
    </div>
  );
}

export default LineCharts;