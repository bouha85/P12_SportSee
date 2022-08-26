import React from 'react';
import NavH from './components/NavH';
import NavV from './components/NavV';
import Dashboard from './page/Dashboard';
import './App.css';

const App = () => {
    return (
        <div className='APP'>
           <NavH/> 
           <div className='app-content'>
           <NavV/>
           <Dashboard/>
           </div>
        </div>
    );
};

export default App;