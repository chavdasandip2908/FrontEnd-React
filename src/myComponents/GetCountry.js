import React, { useState } from 'react';
import axios from 'axios';

var data ;

export const fetchData = async () => {
    try {
        // Get access token
        const responseToken = await axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {
            headers: {
                "Accept": "application/json",
                "api-token": "6ipX_pWA4MT4iEk7S-1oRAZ7QvVq2PhmwQFpquICe6DLLHauIRUl_kCQNcrNxelcwSc",
                "user-email": "chavdasandipbhai@gmail.com"
            }
        });

        // setAuthToken(responseToken.data.auth_token);

        // Get countries
        const responseCountries = await axios.get('https://www.universal-tutorial.com/api/countries/', {
            headers: {
                "Authorization": `Bearer ${responseToken.data.auth_token}`,
                "Accept": "application/json"
            }
        });
        

        // setCountries(responseCountries.data);
        data = responseCountries.data;
    } catch (error) {
        console.error(error);
    }
    return data;
};

// export const getStates = async (countryName) => {
//     try {
//         const responseStates = await axios.get(`https://www.universal-tutorial.com/api/states/${countryName}`, {
//             headers: {
//                 "Authorization": `Bearer ${authToken}`,
//                 "Accept": "application/json"
//             }
//         });

//         // setStates(responseStates.data);
//     } catch (error) {
//         console.error(error);
//     }
// };

// export const getCities = async (stateName) => {
//     try {
//         const responseCities = await axios.get(`https://www.universal-tutorial.com/api/cities/${stateName}`, {
//             headers: {
//                 "Authorization": `Bearer ${authToken}`,
//                 "Accept": "application/json"
//             }
//         });

//         // setCities(responseCities.data);
//     } catch (error) {
//         console.error(error);
//     }
// };








// var auth_token = "10";
// export const gerateToken = async () => {
//     try {
//         // Get access token
//         const responseToken = await axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {
//             headers: {
//                 "Accept": "application/json",
//                 "api-token": "6ipX_pWA4MT4iEk7S-1oRAZ7QvVq2PhmwQFpquICe6DLLHauIRUl_kCQNcrNxelcwSc",
//                 "user-email": "chavdasandipbhai@gmail.com"
//             }
//         });

//         auth_token = responseToken.data.auth_token;
//     } catch (error) {
//         console.error(error);
//     }
// };
// export const fetchCountry = async () => {
//     try {
//         await gerateToken();
//         // Get country data
//         const responseCountry = await axios.get('https://www.universal-tutorial.com/api/countries/', {
//             headers: {
//                 "Authorization": `Bearer ${auth_token}`,
//                 "Accept": "application/json"
//             }
//         });

//         console.log(responseCountry.data);
//     } catch (error) {
//         console.error(error);
//     }
// };

// export const fetchState = async () => {
//     try {
//         await gerateToken();
//         // Get country data
//         const responseCountry = await axios.get('https://www.universal-tutorial.com/api/states/India', {
//             headers: {
//                 "Authorization": `Bearer ${auth_token}`,
//                 "Accept": "application/json"
//             }
//         });

//         console.log(responseCountry.data);
//     } catch (error) {
//         console.error(error);
//     }
// };

// export const fetchCity = async () => {
//     try {
//         await gerateToken();
//         // Get country data
//         const responseCountry = await axios.get('https://www.universal-tutorial.com/api/cities/Gujarat', {
//             headers: {
//                 "Authorization": `Bearer ${auth_token}`,
//                 "Accept": "application/json"
//             }
//         });

//         console.log(responseCountry.data);
//     } catch (error) {
//         console.error(error);
//     }
// };

