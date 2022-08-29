import React from "react";
import '../styles/charts/RadarChart.css'
import API from "../services/Api";
import { USER_PERFORMANCE } from "../services/Mocked";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis
} from "recharts";

// const data = [
//   {
//     subject: "Intensité",
//     Frank: 120
//   },
//   {
//     subject: "Vitesse",
//     Frank: 98
//   },
//   {
//     subject: "Force",
//     Frank: 86
//   },
//   {
//     subject: "Endurance",
//     Frank: 99
//   },
//   {
//     subject: "Energie",
//     Frank: 99
//   },
//   {
//     subject: "Cardio",
//     Frank: 99
//   }
// ];

const RadarCharts = (userId) => {

  const userIndex = USER_PERFORMANCE.findIndex((obj) => {
		return obj.userId === userId.id;
	});

	const userData = USER_PERFORMANCE[userIndex].data;

  const Kind = [
		"cardio",
		"energy",
		"endurance",
		"strength",
		"speed",
		"intensity",
	];

  let stat = userData.map(({ value, kind }) => {
		return {
			value: value,
			kind: Kind[kind - 1],
		};
	});
  return (
    <div className="radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx='50%'
          cy='50%'
          outerRadius={70}
          data={stat}
        >
          <PolarGrid stroke="#fff" radialLines={false}/>
          <PolarAngleAxis  dataKey="kind" stroke="#fff" tickLine={false} />
          <Radar
            name="Frank"
            dataKey="value"
            fill="#EE0000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarCharts;