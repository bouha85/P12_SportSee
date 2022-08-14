import React from 'react';

import Header from './components/Header';
import BarCharts from './components/Charts/BarChart';

const App = () => {
    return (
        <div className='APP'>
            <section>
                <Header/>
            </section>
            <section>
            <div>
            <BarCharts />
            </div>
            </section>
        </div>
    );
};

export default App;