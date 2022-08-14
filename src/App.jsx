import React from 'react';

import Header from './components/Header';
import BarCharts from './components/BarChart';
import LineCharts from './components/LineChart';

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
            </div>
            </section>
        </div>
    );
};

export default App;