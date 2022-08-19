import React from 'react';

import Header from './components/Header';
import BarCharts from './components/BarChart';
import LineCharts from './components/LineChart';
import RadarCharts from './components/RadarChart';
import RadialCharts from './components/RadialChart';
import Counter from './components/Counter';

const App = () => {
    return (
        <div className='APP'>
            <section>
                <Header/>
            </section>
            <section>
            <div>
            <BarCharts />
            <LineCharts/>
            <div><RadarCharts/></div>
            <div>
                <RadialCharts/>
            </div>
            

            </div>
            <Counter/>
            </section>
        </div>
    );
};

export default App;