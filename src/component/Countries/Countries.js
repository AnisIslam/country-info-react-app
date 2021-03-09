import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Countries.css'

const Countries = (props) => {
    // console.log(props.country);
    const { name, area, capital, flag, population, region } = props.country;

    // const countryName = name;
    // const history = useHistory();
    // const handleClick = (name) => {
    //     history.push(`/country/${name}`);
    // }
    return (
        <div className='align-item-center'>
            <Card style={{ width: '300px' }} className=' p-2 m-2'>
                <Card.Img variant="" src={flag} />
                <Card.Body className= 'bg-dark text-white mt-2' >
                    <Card.Title>{name}</Card.Title>
                    <p><b>Capital: </b>{capital}</p>
                    <p><b>Region: </b>{region}</p>
                    <Link to={`/country/${name}`}>
                        <Button variant="primary"> Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Countries;