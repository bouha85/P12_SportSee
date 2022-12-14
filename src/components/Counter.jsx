import React from 'react';
import { USER_MAIN_DATA } from "../services/Mocked";
import API from "../services/Api";
import '../styles/charts/Counter.css'
import apple from '../assets/apple.svg';
import cheeseburger from '../assets/cheeseburger.svg';
import chicken from '../assets/chicken.svg';
import energy from '../assets/energy.svg';

const Counter = (userId) => {

  const userIndex = USER_MAIN_DATA.findIndex((obj) => {
		return obj.id === userId.id;
	});

	const userData = USER_MAIN_DATA[userIndex].keyData;

  return (
    <div className="counter"> 
      <div className="counter_icon_cell">
        <div className="counter_icon" style={{backgroundColor:'#ffe6e6'} }>
          <img src={energy} alt="energy calories" />
        </div>
        <div className="counter_text">
          <h3>{userData.calorieCount}kCal</h3>
          <p>Calories</p>
      </div>
      </div>
      <div className="counter_icon_cell">
        <div className="counter_icon" style={{backgroundColor:'#DBECFF'}}>
          <img src={chicken} alt="chicken proteines" />
        </div>
        <div className="counter_text">
          <h3>{userData.proteinCount}g</h3>
          <p>Proteines</p>
        </div>
      </div>
      <div className="counter_icon_cell" >
        <div className="counter_icon" style={{backgroundColor:'#fff5cc'}}>
          <img src={apple} alt="apple Glucides" />
        </div>
        <div className="counter_text">
          <h3>{userData.carbohydrateCount}g</h3>
          <p>Glucides</p>
        </div>
      </div>
      <div className="counter_icon_cell" >
        <div className="counter_icon" style={{backgroundColor:'#ffe6f9'}}>
          <img src={cheeseburger} alt="cheeseburger lipides" />
        </div>
        <div className="counter_text">
          <h3>{userData.lipidCount}g</h3>
          <p className="font-grey">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
