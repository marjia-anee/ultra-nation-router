import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryCode } = useParams();
    const [country, setCountry] = useState({});

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryCode}?fullText=true`;
        fetch(url)
            .then(response => response.json())
            .then(data => setCountry(data[0]));
    }, [])

    return (
        <div>
            <p>The detail of Country: {countryCode}</p>
            <h3>{country.name}</h3>
            <p>{country.capital}</p>
            <p>{country.population}</p>
            <p>{country.area}</p>
            <p>{country.altSpellings}</p>
        </div>
    );
};

export default CountryDetail;