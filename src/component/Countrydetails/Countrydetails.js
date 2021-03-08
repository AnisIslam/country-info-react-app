import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Countrydetails = () => {
    const { countryName } = useParams();
    // console.log(countryName);
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]));

    }, [])

    const { name, area, capital, flag, population, region } = country;
    
    console.log(country);
    return (
        <div>
            <h3>Details of : {name}</h3>
            <h3>Population: {population}</h3>
            <img src={flag} alt="" />
            <h3>Area: {area}</h3>
            <p>Capital: {capital}</p>

        </div>
    );
};

export default Countrydetails;