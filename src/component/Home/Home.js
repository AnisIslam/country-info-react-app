import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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

        

        <div >
           
           <h1 className="p-2 text-center">Here are {countries.length} countries.</h1>
           
            <Container className='text-center d-flex flex-wrap align-items-center justify-content-around'>
            {
                countries.map(country => <Countries country={country}> </Countries>)
            }


            </Container>
        
        </div>
    );
};

export default Home;