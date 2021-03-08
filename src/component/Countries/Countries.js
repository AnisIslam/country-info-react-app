import React from 'react';
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
        <div className='country-div'>
            <div className='country' >
                <h2>Name : {name}</h2>
                <h2>Capital : {capital}</h2>
                <h2><img src={flag} alt="" /> </h2>
                <Link to={`/country/${name}`}>
                    <button> Details </button>
                </Link>
                {/* <button onClick={() => handleClick(name)} > 
                Click Here for Details</button> */}

            </div>

        </div>


    );
};

export default Countries;