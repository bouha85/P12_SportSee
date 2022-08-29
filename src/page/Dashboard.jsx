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

const Dashboard = () => {
    const id = 12;
    return (
        <div className='Dashbord'>
           <Fragment>
            <Header/>
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

