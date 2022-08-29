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
            <div className='dasbord-graphs'>
                <div className='weight'>
            <BarCharts id={id} />
                </div>
                
                <div className='duration'>
            <LineCharts id={id} />
                </div>
                <div className='radar'>
            <RadarCharts id={id}/>
                </div> 
            <div className='score'>
            <RadialCharts id={id}/>
            </div>
           
            
            <Counter id={id}/>
            </div>
           </Fragment>    
        </div>
    );
};

export default Dashboard;

