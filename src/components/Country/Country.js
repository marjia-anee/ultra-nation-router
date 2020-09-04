import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';

const Country = (props) => {

    const {name, capital, callingCodes, alpha2Code, flag} = props.country;

    const history = useHistory();
    const handleClick = (countryCode) => {
        history.push (`/country${countryCode}`);
    }
    

    return (
        <div className="country-style">
            <h2>Name: {name}</h2>
            <p>Capital: {capital}</p> 
            <p>Phone Code: {callingCodes}</p> 
            <img src={flag} alt=""/>
            <br/>
    <Link to= {`/country/${alpha2Code}`}> Show detail of {alpha2Code}</Link>
    <button onClick={() => handleClick(alpha2Code)}> Click me </button> 
        </div>
    );
};

export default Country;