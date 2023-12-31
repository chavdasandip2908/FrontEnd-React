import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Address(Props) {

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
        Props.func.setCountry(selectedCountry)
        getStates(selectedCountry);
    };

    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        Props.func.setState(selectedState)
        getCities(selectedState);
    };

    return (
        <div>
            <div className="address-components">
                <div className="field-group">
                    <div className="fiels">
                        <label htmlFor="typeAddress" className="field-name">Type of Address</label>
                        <select name="typeAddress" value={Props.typeOfAddress} id="typeAddress" onChange={(e) => Props.func.setTypeOfAddress(e.target.value)}>
                            <option value="null">Please Select</option>
                            <option value="office">office</option>
                            <option value="home">Home</option>
                        </select>
                        <div className="message">type of mobile number.</div>
                    </div>
                    <div className="fiels">
                        <label htmlFor="houseNum" className="field-name">House No.</label>
                        <input type="number" id="houseNum" value={Props.houseNumber} className="input-field" name="houseNum" onChange={(e) => Props.func.setHouseNumber(e.target.value)} />
                        <div className="message">enter House Number</div>
                    </div>
                </div>
                <br />
                <div className="field-group">
                    <div className="fiels">
                        <label htmlFor="street" className="field-name">Street</label>
                        <input type="text" id="street" value={Props.street} className="input-field" name="street" onChange={(e) => Props.func.setStreet(e.target.value)} />
                        <div className="message">enter street name</div>
                    </div>
                    <div className="fiels">
                        <label htmlFor="landmark" className="field-name">Landmark</label>
                        <input type="text" id="landmark" value={Props.landmark} className="input-field" name="landmark" onChange={(e) => Props.func.setLandmark(e.target.value)} />
                        <div className="message">enter landmark name</div>
                    </div>
                </div>
                <br />
                <div className="field-group">
                    <div className="fiels">
                        <label htmlFor="society" className="field-name">Society</label>
                        <input type="text" id="society" value={Props.society} className="input-field" name="society" onChange={(e) => Props.func.setSociety(e.target.value)} />
                        <div className="message">enter society name</div>
                    </div>
                    <div className="fiels">
                        <label htmlFor="country" className="field-name">Country</label>

                        <select name="country" id="country" onInput={handleCountryChange}>
                            <option value="">Select Country</option>
                            {countries.map(country => (
                                Props.country == country.country_name
                                    ? (<option key={country.country_name} value={country.country_name} selected>{country.country_name}</option>)
                                    : <option key={country.country_name} value={country.country_name}>{country.country_name}</option>
                            ))}
                        </select>
                        <div className="message">type of mobile number.</div>
                    </div>
                </div>
                <br />
                <div className="field-group">
                    <div className="fiels">
                        <label htmlFor="state" className="field-name">State</label>

                        <select name="state" id="state" onChange={handleStateChange}>
                            <option value="select">Select State</option>
                            {states.map(state => (
                                Props.state == state.state_name ?
                                    (<option key={state.state_name} value={state.state_name} selected>{state.state_name}</option>) :
                                    <option key={state.state_name} value={state.state_name}>{state.state_name}</option>
                            ))}
                        </select>
                        <div className="message">type of mobile number.</div>
                    </div>
                    <div className="fiels">
                        <label htmlFor="city" className="field-name">City</label>
                        <select name="city" id="city" onChange={(e) => Props.func.setCity(e.target.value)}>
                            <option value="select">Select City</option>
                            {cities.map(city => (
                                Props.city == city.city_name ?
                                    <option key={city.city_name} value={city.city_name} selected>{city.city_name}</option> :
                                    <option key={city.city_name} value={city.city_name}>{city.city_name}</option>
                            ))}
                        </select>
                        <div className="message">type of mobile number.</div>
                    </div>
                </div>
                <br />
                <div className="field-group">
                    <div className="fiels">
                        <label htmlFor="pinCode" className="field-name">Pin Code</label>
                        <input type="number" id="pinCode" value={Props.pinCode} className="input-field" name="pinCode" onChange={(e) => Props.func.setPinCode(e.target.value)} />
                        <div className="message">enter House Number</div>
                    </div>
                </div>
                <br />

            </div>
        </div>
    )
}
