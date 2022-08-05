import React from 'react';
import NavH from './components/NavH';
import NavV from './components/NavV';
// import Header from './components/Header';

const App = () => {
    return (
        <div className='APP'>
            <NavH/>
            {/* <Header/> */}
            <NavV/>
        </div>
    );
};

export default App;