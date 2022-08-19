import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const data = [
  {
    uv: 31,
    fill: "#ff0000"
  }
];

const RadialCharts = () => {
  return (
    <RadialBarChart
      width={350}
      height={350}
      cx="50%"
      cy="50%"
      innerRadius="50%"
      barSize={10}
      data={data}
      startAngle={90}
      endAngle={450}
    >
      <text x="35%" y="20%" textAnchor="middle" dominantBaseline="middle">
        Score
      </text>
      <text
        className="h1-ui"
        x="50%"
        y="42%"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        12%
      </text>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
        de votre
      </text>
      <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle">
        objectif
      </text>
      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
      <RadialBar background={true} dataKey="uv" cornerRadius={20} />
    </RadialBarChart>
  );
}

export default RadialCharts;
