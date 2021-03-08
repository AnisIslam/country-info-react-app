import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])
    // console.log(countries);

    return (
        <div>
            <h1>Here are {countries.length} countries.</h1>
            {
                countries.map(country => <Countries country={country}> </Countries>)
            }

        </div>
    );
};

export default Home;