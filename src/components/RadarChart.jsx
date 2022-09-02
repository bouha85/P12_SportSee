import React from "react";
import '../styles/charts/RadarChart.css'
import API from "../services/Api";
import PropTypes from "prop-types";
import { USER_PERFORMANCE } from "../services/Mocked";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis
} from "recharts";


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

RadarCharts.prototype = {
  userId: PropTypes.number.isRequired
}