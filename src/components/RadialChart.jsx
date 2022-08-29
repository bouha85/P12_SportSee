import React from "react";
import API from "../services/Api";
import { USER_MAIN_DATA } from "../services/Mocked";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";

// const data = [
//   {
//     uv: 31,
//     fill: "#ff0000"
//   }
// ];

const RadialCharts = (userId) => {

  const userIndex = USER_MAIN_DATA.findIndex((obj) => {
		return obj.id === userId.id;
	});

	const userData = USER_MAIN_DATA[userIndex].todayScore;

	const Score = [
		{
			uv: userData * 100,
			fill: "#ff0000",
		},
	];
  return (
    <ResponsiveContainer width="100%" height="100%">
    <RadialBarChart
      cx="50%"
      cy="50%"
      innerRadius="50%"
      barSize={10}
      data={Score}
      startAngle={-270}
      endAngle={90}
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
        style={{ fontWeight: 700, fontSize: 16 }}
      >
        {userData * 100}%
      </text>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" style={{ fontWeight: 700, fontSize: 16 }}>
        de votre
      </text>
      <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" style={{ fontWeight: 700, fontSize: 16 }}>
        objectif
      </text>
      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
      <RadialBar background={true} dataKey="uv" cornerRadius={20} />
    </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default RadialCharts;
