import React from 'react';
import '../styles/charts/Header.css'
import PropTypes from "prop-types";
import API from "../services/Api";
import { USER_MAIN_DATA } from "../services/Mocked";


/**
 * The Header component is a React component that renders a header with a name and a paragraph
 * @param {string} firstname
 * @returns A div with a h1 and a p.
 */

const Header = () => {
  const id = 12;
  const userIndex = USER_MAIN_DATA.findIndex((obj) => {
		return obj.id === id;
	});

	const userData = USER_MAIN_DATA[userIndex].userInfos;
    return (
        <div className='header'>
          <h1>Bonjour <span className='name'>{ userData.firstName }</span></h1> 
          <p>Félicitations! Vous avez explosé vos objectifs hier 👏 </p> 
        </div>
    );
};

export default Header;

Header.propTypes = {
	firstname: PropTypes.string.isRequired
}