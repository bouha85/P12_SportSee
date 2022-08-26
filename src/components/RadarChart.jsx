import React from "react";
import '../styles/charts/RadarChart.css'
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis
} from "recharts";

const data = [
  {
    subject: "Intensité",
    Frank: 120
  },
  {
    subject: "Vitesse",
    Frank: 98
  },
  {
    subject: "Force",
    Frank: 86
  },
  {
    subject: "Endurance",
    Frank: 99
  },
  {
    subject: "Energie",
    Frank: 99
  },
  {
    subject: "Cardio",
    Frank: 99
  }
];

const RadarCharts = () => {
  return (
    <div className="radar-UI">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx='50%'
          cy='50%'
          outerRadius={70}
          width={350}
          height={300}
          data={data}
        >
          <PolarGrid stroke="#fff" />
          <PolarAngleAxis  dataKey="subject" stroke="#fff" tickLine={false} />
          <Radar
            name="Frank"
            dataKey="Frank"
            fill="#EE0000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarCharts;