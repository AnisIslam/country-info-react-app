import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

            <Card className="p-2 text-center bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                    <Card.Title>Details of : {name}</Card.Title>
                    <Card.Text>
                        <p>Population: {population}</p>
                        <p>Area: {area}</p>
                        <p>Capital: {capital}</p>

                    </Card.Text>
                    <Link to={'/home'}>
                        <Button variant="primary"> Go to Home</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Countrydetails;