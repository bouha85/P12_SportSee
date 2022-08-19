import React from 'react';
import apple from '../assets/apple.svg';
import cheeseburger from '../assets/cheeseburger.svg';
import chicken from '../assets/chicken.svg';
import energy from '../assets/energy.svg';

const Counter = () => {
  return (
    <div className="Counter Counter-energy">
      <div className="counter_icon_cell">
        <div className="counter_icon">
          <img src={energy} alt="energy calories" />
        </div>
        <div className="counter_text">
          <h3>1,930kCal</h3>
          <p>Calories</p>
        </div>
      </div>
      <div className="counter_icon_cell">
        <div className="counter_icon">
          <img src={chicken} alt="chicken proteines" />
        </div>
        <div className="counter_text">
          <h3>155g</h3>
          <p>Proteines</p>
        </div>
      </div>
      <div className="counter_icon_cell">
        <div className="counter_icon">
          <img src={apple} alt="apple Glucides" />
        </div>
        <div className="counter_text">
          <h3>290g</h3>
          <p>Glucides</p>
        </div>
      </div>
      <div className="counter_icon_cell">
        <div className="counter_icon">
          <img src={cheeseburger} alt="cheeseburger lipides" />
        </div>
        <div className="counter_text">
          <h3>50g</h3>
          <p>Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
