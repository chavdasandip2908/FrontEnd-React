import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [authToken, setAuthToken] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get access token
        const responseToken = await axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {
          headers: {
            "Accept": "application/json",
            "api-token": "6ipX_pWA4MT4iEk7S-1oRAZ7QvVq2PhmwQFpquICe6DLLHauIRUl_kCQNcrNxelcwSc",
            "user-email": "chavdasandipbhai@gmail.com"
          }
        });

        setAuthToken(responseToken.data.auth_token);

        // Get countries
        const responseCountries = await axios.get('https://www.universal-tutorial.com/api/countries/', {
          headers: {
            "Authorization": `Bearer ${responseToken.data.auth_token}`,
            "Accept": "application/json"
          }
        });

        setCountries(responseCountries.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  const getStates = async (countryName) => {
    try {
      const responseStates = await axios.get(`https://www.universal-tutorial.com/api/states/${countryName}`, {
        headers: {
          "Authorization": `Bearer ${authToken}`,
          "Accept": "application/json"
        }
      });

      setStates(responseStates.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCities = async (stateName) => {
    try {
      const responseCities = await axios.get(`https://www.universal-tutorial.com/api/cities/${stateName}`, {
        headers: {
          "Authorization": `Bearer ${authToken}`,
          "Accept": "application/json"
        }
      });

      setCities(responseCities.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    getStates(selectedCountry);
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    getCities(selectedState);
  };

  return (
    <div>
      <label htmlFor="country">Country:</label>
      <select id="country" onChange={handleCountryChange}>
        <option value="select">Select Country</option>
        {countries.map(country => (
          <option key={country.country_name} value={country.country_name}>{country.country_name}</option>
        ))}
      </select>

      <label htmlFor="state">State:</label>
      <select id="state" onChange={handleStateChange}>
        <option value="select">Select State</option>
        {states.map(state => (
          <option key={state.state_name} value={state.state_name}>{state.state_name}</option>
        ))}
      </select>

      <label htmlFor="city">City:</label>
      <select id="city">
        <option value="select">Select City</option>
        {cities.map(city => (
          <option key={city.city_name} value={city.city_name}>{city.city_name}</option>
        ))}
      </select>
    </div>
  );
};

export default YourComponent;
