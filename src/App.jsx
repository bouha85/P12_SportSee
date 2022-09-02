import React from 'react';
import {useState } from "react";
import NavH from './components/NavH';
import NavV from './components/NavV';
import Dashboard from './page/Dashboard';
import './App.css';

/**
 * This function component returns the global Dashboard App.
 * NavH - Horizontal nav covers 100% width.
 * .app-content - Container for NAvV & Dashboard component.
 * NavV - Vertical Nav covers 100% height.
 * Dashboard - Contains all graphics & user data.
 * @returns The global interface of SportSee Dashboard
 */

const App = () => {
    // Default userId set to 12
    const [userId, setUserId] = useState(12);
    return (
        <div className='APP'>
           <NavH currentUser={[userId, setUserId]}/> 
           <div className='app-content'>
           <NavV/>
           <Dashboard userId={userId}/>
           </div>
        </div>
    );
};

export default App;