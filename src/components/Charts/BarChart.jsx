import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
    {
      name: "1",
      uv: 4000,
      pv: 2400,
      max: 10000
    },
    {
      name: "2",
      uv: 3000,
      pv: 1398,
      max: 10000
    },
    {
      name: "3",
      uv: 2000,
      pv: 9800,
      max: 10000
    },
    {
      name: "4",
      uv: 2780,
      pv: 3908,
      max: 10000
    },
    {
      name: "5",
      uv: 1890,
      pv: 4800,
      max: 10000
    },
    {
      name: "6",
      uv: 2390,
      pv: 3800,
      max: 10000
    },
    {
      name: "7",
      uv: 3490,
      pv: 4300,
      max: 10000
    },
    {
      name: "8",
      uv: 2390,
      pv: 3800,
      max: 10000
    },
    {
      name: "9",
      uv: 2390,
      pv: 3800,
      max: 10000
    },
    {
      name: "10",
      uv: 2390,
      pv: 3800,
      max: 10000
    }
  ];

  const BarCharts = () => {
    return (
      <BarChart
        width={1200}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 80,
          left: 80,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tickLine={false} tickMargin={10} />
        <YAxis
          tickMargin={20}
          tickLine={false}
          axisLine={false}
          orientation="right"
          type="number"
          tickCount="3"
          dataKey="max"
        />
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          height={100}
        />
        <Tooltip />
  
        <Bar
          name="Poids (kg)"
          dataKey="pv"
          fill="#111"
          radius={[20, 20, 0, 0]}
          barSize={15}
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="uv"
          fill="#ff0000"
          radius={[20, 20, 0, 0]}
          barSize={15}
        />
      </BarChart>
    );
  }
  
  export default BarCharts;