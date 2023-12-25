import React, { useState } from 'react'
import Address from './Address'
import MobileNumber from './MobileNumber'
import "./RegisterForm.css"
import UserData from './UserData'
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import registerLogo from "./pngtree-register-now-banner-design-transparent-background-png-image_6535781.png"


export default function RegisterForm() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [profile, setProfile] = useState('');
    const [preferredLanguage, setPreferredLanguage] = useState('');
    const [education, setEducation] = useState('');
    const [socialMeadia, setSocialMeadia] = useState('');
    const [selectedHobbies, setSelectedHobbies] = useState([]);

    const [typeOfMobileNumber, setTypeOfMobileNumber] = useState('');
    const [Mobile, setMobile] = useState('');
    const [typeOfAddress, setTypeOfAddress] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [street, setStreet] = useState('');
    const [landmark, setLandmark] = useState('');
    const [society, setSociety] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pinCode, setPinCode] = useState('');



    const handleCheckboxChange = (e) => {
        let hobby = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            // if user select other check box , then take the value of other hobbie 
            if (e.target.value === 'other') {
                const otherHobbieEle = document.getElementById("otherHobbies");
                if (otherHobbieEle.value) {
                    selectedHobbies.push(otherHobbieEle.value);
                }
            } else {
                // Add the selected hobby to the array
                setSelectedHobbies([...selectedHobbies, hobby]);
            }
        } else {
            // Remove the unselected hobby from the array
            setSelectedHobbies(selectedHobbies.filter((h) => h !== hobby));
        }

    };

    const convertURLBase64 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setProfile(base64String);
            };
            reader.readAsDataURL(file);
        }
    }

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        if (!firstname ||
            !lastname ||
            !username ||
            !email ||
            !dob ||
            !gender ||
            !profile ||
            !preferredLanguage ||
            !education ||
            !socialMeadia ||
            !selectedHobbies ||
            !typeOfMobileNumber ||
            !Mobile ||
            !typeOfAddress ||
            !houseNumber ||
            !street ||
            !landmark ||
            !society ||
            !country ||
            !state ||
            !city ||
            !pinCode) {
            alert("Form is not valid ")
            return;
        }

        const data = {
            id: uniqueId,
            userType: 'customer',
            personalInfo: {
                firstname: firstname,
                lastname: lastname,
                username: username,
                email: email,
                dob: dob,
                gender: gender,
                profile: profile,
                preferredLanguage: preferredLanguage,
                education: education,
                socialMedia: socialMeadia,
            },
            contactInfo: {
                typeOfMobileNumber: typeOfMobileNumber,
                Mobile: Mobile
            },
            hobbies: selectedHobbies,
            addressInfo: {
                typeOfAddress: typeOfAddress,
                houseNumber: houseNumber,
                street: street,
                landmark: landmark,
                society: society,
                country: country,
                state: state,
                city: city,
                pinCode: pinCode,
            },
        }

        UserData.push(data);
        // console.log(data);
        localStorage.setItem("user-data", JSON.stringify(data));
        history('/home');
    }

    return (
        <>
            <div className="main">
                <form action="#">
                    <div className="fiels header">
                        <div className="form-logo">
                            <img src={registerLogo} alt="" />
                        </div>
                        <div className="form-text">
                            <h1>Registration Form</h1>
                            <p>Fill out the form carefully for registration</p>
                        </div>
                    </div>
                    <hr />
                    <div className="field-group">
                        <div className="fiels">
                            <label htmlFor="firstname" className="field-name">First Name </label>
                            <input type="text" id="firstname" className="input-field" onChange={(e) => { setFirstname(e.target.value) }} />
                            <div className="message">enter first name </div>
                        </div>
                        <div className="fiels">
                            <label htmlFor="lastname" className="field-name">Last Name </label>
                            <input type="text" id="lastname" className="input-field" onChange={(e) => { setLastName(e.target.value) }} />
                            <div className="message">enter last name </div>
                        </div>
                    </div>
                    <br />
                    <div className="field-group">
                        <div className="fiels">
                            <label htmlFor="username" className="field-name">Username </label>
                            <input type="text" id="username" className="input-field" onChange={(e) => { setUsername(e.target.value) }} />
                            <div className="message">ex. abcd1234</div>
                        </div>
                        <div className="fiels">
                            <label htmlFor="email" className="field-name">Email </label>
                            <input type="email" id="email" className="input-field" onChange={(e) => { setEmail(e.target.value) }} />
                            <div className="message">ex. example123@example.com</div>
                        </div>
                    </div>
                    <br />
                    <div className="field-group">
                        <div className="fiels">
                            <label htmlFor="dateofbirth" className="field-name">Date of Birth </label>
                            <input type="date" id="dateofbirth" className="input-field" onChange={(e) => { setDob(e.target.value) }} />
                            <div className="message"></div>
                        </div>
                        <div className="fiels">
                            <label htmlFor="gender" className="field-name">Gender</label>
                            <select name="gender" id="gender" onChange={(e) => { setGender(e.target.value) }}>
                                <option value="null">Please Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="message"></div>
                        </div>
                    </div>
                    <br />
                    <div className="field-group">
                        <div className="fiels">
                            <label htmlFor="profile" className="field-name">Profile Picture</label>
                            <input type="file" id="profile" className="input-field" name="fileUpload" accept=".png, .jpg" onChange={(e) => { convertURLBase64(e) }} />
                            <div className="message">upload profile picture</div>
                        </div>
                        <div className="fiels">
                            <label htmlFor="preferredLanguage" className="field-name">Preferred Language</label>
                            <select name="preferredLanguage" id="preferredLanguage" onChange={(e) => { setPreferredLanguage(e.target.value) }}>
                                <option value="null">Please Select</option>
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                                <option value="gujarati">Gujarati</option>
                            </select>
                            <div className="message">choice preferred language</div>
                        </div>
                    </div>
                    <br />
                    <div className="field-group">
                        <div className="fiels">
                            <label htmlFor="education" className="field-name">Education</label>
                            <select name="education" id="education" onChange={(e) => { setEducation(e.target.value) }}>
                                <option value="null">Please Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <div className="message">education</div>
                        </div>
                        <div className="fiels">
                            <label htmlFor="socialMeadia" className="field-name">Social Meadia URL</label>
                            <input type="url" id="socialMeadia" className="input-field" name="socialMeadia" onChange={(e) => { setSocialMeadia(e.target.value) }} />
                            <div className="message">Social Meadia URL(Like : Instagram , fecebook )</div>
                        </div>
                    </div>
                    <br />
                    <div className="field-group">
                        <div className="fiels">
                            <label htmlFor="name" className="field-name">Hobbies</label>
                            <div className="checkbox-field"><input type="checkbox" onChange={handleCheckboxChange} value="sports" /> <span>Sports</span></div>
                            <div className="checkbox-field"><input type="checkbox" onChange={handleCheckboxChange} value="reading" /> <span>Reading</span></div>
                            <div className="checkbox-field"><input type="checkbox" onChange={handleCheckboxChange} value="cooking" /> <span>Cooking</span></div>
                            <div className="checkbox-field"><input type="checkbox" onChange={handleCheckboxChange} value="music" /> <span>Music</span></div>
                            <div className="checkbox-field"><input type="checkbox" onChange={handleCheckboxChange} value="other" /> <span>Other</span></div>
                        </div>
                        <div className="fiels">
                            <label htmlFor="otherHobbies" className="field-name">Other Hobbies</label>
                            <input type="text" id="otherHobbies" className="input-field" />
                            <div className="message">enter last name </div>
                        </div>
                    </div>
                    <br />
                    <MobileNumber func={{ setTypeOfMobileNumber, setMobile }} />
                    <button className="add-component"> + Add another Mobile Number </button>
                    <Address func={{ setTypeOfAddress, setHouseNumber, setStreet, setLandmark, setSociety, setCountry, setState, setCity, setPinCode }} />
                    <button className="add-component"> + Add another Address</button>
                    <br />
                    <button type="submit" onClick={(e) => handleSubmit(e)} className="form-sub-btn">Submit</button>
                </form>
            </div>
        </>
    )
}

