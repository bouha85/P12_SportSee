import React, { Fragment } from 'react';
import API from "../services/Api";
import { USER_MAIN_DATA } from "../services/Mocked";
import Header from '../components/Header';
import BarCharts from '../components/BarChart';
import LineCharts from '../components/LineChart';
import RadarCharts from '../components/RadarChart';
import RadialCharts from '../components/RadialChart';
import Counter from '../components/Counter';
import '../styles/page/Dashbord.css'
import PropTypes from "prop-types";

/**
 * This function renders the dashboard.
 * @param {number} userId - The id number of current user.
 * @returns The Dashboard component is returning a div element with all the graphics.
 */

const Dashboard = () => {
    const id = 12;
    
  const userIndex = USER_MAIN_DATA.findIndex((obj) => {
		return obj.id === id;
	});

	const userData = USER_MAIN_DATA[userIndex].userInfos;
    return (
        <div className='Dashbord'>
           <Fragment>
            <Header firstname={userData.firstName} />
            <div className='dasbord-charts'>
            <div className="dashbord-charts-first-column">   
            <BarCharts id={id} />
            <div className="dashbord-charts-first-column-row-3">
            <LineCharts id={id} />  
            <RadarCharts id={id}/>
            <RadialCharts id={id}/>
            </div>
            </div>
           
            <div className="dashbord-charts-second-column"> 
            <Counter id={id}/>
            </div>
            </div>
           </Fragment>    
        </div>
    );
};

export default Dashboard;
Dashboard.propTypes = {
	userId: PropTypes.number.isRequired,
};


