import React from "react";
import API from "../services/Api";
import { USER_ACTIVITY } from "../services/Mocked";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [
//     {
//       name: "1",
//       uv: 4000,
//       pv: 2400,
//       max: 10000
//     },
//     {
//       name: "2",
//       uv: 3000,
//       pv: 1398,
//       max: 10000
//     },
//     {
//       name: "3",
//       uv: 2000,
//       pv: 9800,
//       max: 10000
//     },
//     {
//       name: "4",
//       uv: 2780,
//       pv: 3908,
//       max: 10000
//     },
//     {
//       name: "5",
//       uv: 1890,
//       pv: 4800,
//       max: 10000
//     },
//     {
//       name: "6",
//       uv: 2390,
//       pv: 3800,
//       max: 10000
//     },
//     {
//       name: "7",
//       uv: 3490,
//       pv: 4300,
//       max: 10000
//     },
//     {
//       name: "8",
//       uv: 2390,
//       pv: 3800,
//       max: 10000
//     },
//     {
//       name: "9",
//       uv: 2390,
//       pv: 3800,
//       max: 10000
//     },
//     {
//       name: "10",
//       uv: 2390,
//       pv: 3800,
//       max: 10000
//     }
//   ];

  const BarCharts = (userId) => {
    // const api = new API()
    // api.getUser(12).then((data)=> console.log(data))

    const userIndex = USER_ACTIVITY.findIndex((obj) => {
      return obj.userId === userId.id;
    });

    const userData = USER_ACTIVITY[userIndex];

    let userDataDisplay = userData.sessions.map(
      ({ kilogram, calories }, index) => {
        return {
          kilogram: kilogram,
          calories: calories,
          day: (index + 1).toString(),
        };
      }
    );

    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="activity-tooltip">
            <p className="activity-tooltip-kg">{`${payload[0].value}Kg`}</p>
            <p className="activity-tooltip-kcal">{`${payload[1].value}kCal`}</p>
          </div>
        );
      }
  
      return null;
    };
  
    return (
      <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={userDataDisplay}
        width={500}
				height={300}
					margin={{
						top: 15,
							right: 15,
							left: 23,
							bottom: 15,
					}}
					barSize={10}
					barGap={8}
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis dataKey="day"
							tickLine={false}
							tickMargin={15}
              stroke=" #DEDEDE"
						  tick={{ fill: "#9B9BAC", fontWeight: 500, fontSize: 14 }}
						  padding={{ left: -50, right: -50 }}
						 />
        <YAxis
          yAxisId="kilogram"
          domain={["dataMin -1", "dataMax +2"]}
          tickLine={false}
          orientation="right"
          axisLine={false}
          tick={{ fill: "#9B9BAC", fontWeight: 500, fontSize: 14 }}
          tickMargin={40}
          minTickGap={30}
        />
        <YAxis yAxisId="calories" hide />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          className="activityLegend"
          verticalAlign="top"
          align="right"
          iconType={"circle"}
          iconSize={8}
          width={300}
          height={25}
          wrapperStyle={{ top: 13, right: 32 }}
          formatter={(value) => {
            return (
              <span
                style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}
              >
                {value}
              </span>
            );
          }}
        />
        <Tooltip />
  
        <Bar
          yAxisId="kilogram"
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          radius={[4, 4, 0, 0]}
        />
        <text
						className="graphTitle"
						x="5%"
						y="5%"
						dominantBaseline="middle"
						fill="#20253A"
						style={{ fontWeight: 400, fontSize: 16, marginLeft:-50 }}
					>
						Activité quotidienne
					</text>
      </BarChart>
      </ResponsiveContainer>
    );
  }
  
  export default BarCharts;