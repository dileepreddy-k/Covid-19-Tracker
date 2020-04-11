import React, { useState, useEffect } from 'react';

import { fetchCountries } from '../../api';

const CountrySelector = (props) => {

    const handleCountryChange = props.handleCountryChange;

    const [countries, setCountries] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {
            setCountries(await fetchCountries());
            console.log(countries);
        };
        
        fetchAPI();
    }, []);
  
    return (
        <div className="ui segment">
            <select className="ui fluid dropdown selection"
                onChange={(e) => handleCountryChange(e.target.value)}
                >
                <option value="Global" selected disabled>Choose Country</option>
                {
                    countries.map( (country, index) => {
                        return <option value={country.name} key={index}>{country.name}</option>
                    })
                }
            </select>
        </div>
    )
}

export default CountrySelector;