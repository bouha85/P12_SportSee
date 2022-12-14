import * as React from "react";
import '../styles/charts/LineChart.css'
import API from "../services/Api";
import PropTypes from "prop-types";
import { USER_AVERAGE_SESSIONS } from "../services/Mocked";
import { LineChart, Line, YAxis, XAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";





const LineCharts = (userId) => {
  
    /* 	const api = new API();

	api.getAverageSessions(12).then((data) => console.log(data)); */

  const userIndex = USER_AVERAGE_SESSIONS.findIndex((obj) => {
		return obj.userId === userId.id;
	});
  const userData = USER_AVERAGE_SESSIONS[userIndex].sessions;

	const days = ["L", "M", "M", "J", "V", "S", "D"];
	const sessions = [];

  userData.forEach((session) => {
		sessions.push({
			name: days[session.day - 1],
			sessionLength: session.sessionLength,
		});
	});

  const Title = () => {
		return <div className="average-title">Durée moyenne des sessions</div>;
	};

	const CustomizedTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="session-tooltip">
					<p className="session-tooltip-min">{`${payload[0].value} min`}</p>
				</div>
			);
		}

		return null;
	};
    
  return (
    <div className="average-session">
      <ResponsiveContainer width="100%" height="100%">
      <LineChart 
            width={500}
			height={300}
			data={sessions}
			margin={{
			top: 20,
			right: 15,
			left: 15,
			bottom: 15,
			}}>
        <XAxis dataKey="name" axisLine={false} stroke="#fff" tick={{ fill: "#ffffff", fontWeight: 500, fontSize: 14 }} />
        <YAxis hide={true} />
        <Line
							type="monotone"
							dataKey="sessionLength"
							stroke="#FFFFFF"
							dot={false}
							strokeWidth={2}
						/>
            <Tooltip content={<CustomizedTooltip />} cursor={false} />
            <Legend verticalAlign="top" align="left" content={Title} />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineCharts;
LineCharts.prototype = {
	userId: PropTypes.number.isRequired
}