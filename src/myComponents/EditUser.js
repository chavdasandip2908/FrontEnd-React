import React, { useState, useEffect } from 'react'
import Address from './Address'
import MobileNumber from './MobileNumber'
import "./RegisterForm.css"
import AllUserData from './UserData'
import { useNavigate } from "react-router-dom";
import registerLogo from "./pngtree-register-now-banner-design-transparent-background-png-image_6535781.png"



export default function EditUser() {
    const UserData = JSON.parse(localStorage.getItem("Data"));
    const id = UserData.id;

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [genders, setGenders] = useState(['male', 'female', 'other']);
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            // Resize the image before converting to Base64
            resizeImage(file, 150, 150, (resizedImage) => {
                convertToBase64(resizedImage);
            });
        }
    };

    const resizeImage = (file, maxWidth, maxHeight, callback) => {
        const reader = new FileReader();

        reader.onload = function (readerEvent) {
            const image = new Image();
            image.onload = function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                let width = image.width;
                let height = image.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                ctx.drawImage(image, 0, 0, width, height);

                const dataUrl = canvas.toDataURL('image/jpeg');
                const resizedImage = dataURLtoFile(dataUrl, 'resized.jpg');
                callback(resizedImage);
            };
            image.src = readerEvent.target.result;
        };

        reader.readAsDataURL(file);
    };

    const convertToBase64 = (file) => {
        const reader = new FileReader();

        reader.onloadend = function () {
            const base64String = reader.result;
            setProfile(base64String);
        };

        reader.readAsDataURL(file);
    };

    // Convert data URL to File
    const dataURLtoFile = (dataURL, filename) => {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    };

    let history = useNavigate();


    var index = AllUserData.map((e) => {
        return e.id;
    }).indexOf(id);


    const handleSubmit = (e) => {
        e.preventDefault();

        let a = AllUserData[index];

        a.personalInfo.firstname = firstname;
        a.personalInfo.lastname = lastname;
        a.personalInfo.username = username;
        a.personalInfo.email = email;
        a.personalInfo.dob = dob;
        a.personalInfo.gender = gender;
        a.personalInfo.profile = profile;
        a.personalInfo.preferredLanguage = preferredLanguage;
        a.personalInfo.education = education;
        a.personalInfo.socialMedia = socialMeadia;

        a.contactInfo.typeOfMobileNumber = typeOfMobileNumber;
        a.contactInfo.Mobile = Mobile;

        a.hobbies = selectedHobbies;

        a.addressInfo.typeOfAddress = typeOfAddress;
        a.addressInfo.houseNumber = houseNumber;
        a.addressInfo.street = street;
        a.addressInfo.landmark = landmark;
        a.addressInfo.society = society;
        a.addressInfo.country = country;
        a.addressInfo.state = state;
        a.addressInfo.city = city;
        a.addressInfo.pinCode = pinCode;

        history('/user-listing');
    }

    useEffect(() => {
        const id = UserData.id;
        setFirstname(UserData.personalInfo.firstname)
        setLastName(UserData.personalInfo.lastname)
        setUsername(UserData.personalInfo.username)
        setEmail(UserData.personalInfo.email)
        setDob(UserData.personalInfo.dob)
        setGender(UserData.personalInfo.gender)
        setProfile(UserData.personalInfo.profile)
        setPreferredLanguage(UserData.personalInfo.preferredLanguage)
        setEducation(UserData.personalInfo.education)
        setSocialMeadia(UserData.personalInfo.socialMedia)
        setSelectedHobbies(UserData.hobbies)
        setTypeOfMobileNumber(UserData.contactInfo.typeOfMobileNumber)
        setMobile(UserData.contactInfo.Mobile)
        setTypeOfAddress(UserData.addressInfo.typeOfAddress)
        setHouseNumber(UserData.addressInfo.houseNumber)
        setStreet(UserData.addressInfo.street)
        setLandmark(UserData.addressInfo.landmark)
        setSociety(UserData.addressInfo.society)
        setCountry(UserData.addressInfo.country)
        setState(UserData.addressInfo.state)
        setCity(UserData.addressInfo.city)
        setPinCode(UserData.addressInfo.pinCode)

    }, []);

   


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
                            <input type="text" id="firstname" value={firstname} className="input-field" onChange={(e) => { setFirstname(e.target.value) }} />
                            <div className="message">enter first name </div>
                        </div>
                        <div className="fiels">
                            <label htmlFor="lastname" className="field-name">Last Name </label>
                            <input type="text" id="lastname" value={lastname} className="input-field" onChange={(e) => { setLastName(e.target.value) }} />
                            <div className="message">enter last name </div>
                        </div>
                    </div>
                    <br />
                    <div className="field-group">
                        <div className="fiels">
                            <label htmlFor="username" className="field-name">Username </label>
                            <input type="text" id="username" value={username} className="input-field" onChange={(e) => { setUsername(e.target.value) }} />
                            <div className="message">ex. abcd1234</div>
                        </div>
                        <div className="fiels">
                            <label htmlFor="email" className="field-name">Email </label>
                            <input type="email" id="email" value={email} className="input-field" onChange={(e) => { setEmail(e.target.value) }} />
                            <div className="message">ex. example123@example.com</div>
                        </div>
                    </div>
                    <br />
                    <div className="field-group">
                        <div className="fiels">
                            <label htmlFor="dateofbirth" className="field-name">Date of Birth </label>
                            <input type="date" id="dateofbirth" value={dob} className="input-field" onChange={(e) => { setDob(e.target.value) }} />
                            <div className="message"></div>
                        </div>
                        <div className="fiels">
                            <label htmlFor="gender" className="field-name">Gender</label>
                            <select name="gender" id="gender" value={gender} onChange={(e) => { setGender(e.target.value) }}>
                                {genders.map((item, index) => (
                                    gender === item ?
                                        (<option key={index} value={item} selected>{item}</option>) :
                                        (<option key={index} value={item} >{item}</option>)
                                ))}
                            </select>
                            <div className="message"></div>
                        </div>
                    </div>
                    <br />
                    <div className="field-group">
                        <div className="fiels">
                            <label htmlFor="profile" className="field-name">Profile Picture</label>
                            <input type="file" id="profile" className="input-field" name="fileUpload" accept=".png, .jpg" onChange={(e) => { handleImageChange(e) }} />
                            <div className="message">upload profile picture</div>
                        </div>
                        <div className="fiels">
                            <label htmlFor="preferredLanguage" className="field-name">Preferred Language</label>
                            <select name="preferredLanguage" value={preferredLanguage} id="preferredLanguage" onChange={(e) => { setPreferredLanguage(e.target.value) }}>
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
                            <select name="education" value={education} id="education" onChange={(e) => { setEducation(e.target.value) }}>
                                <option value="null">Please Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <div className="message">education</div>
                        </div>
                        <div className="fiels">
                            <label htmlFor="socialMeadia" className="field-name">Social Meadia URL</label>
                            <input type="url" id="socialMeadia" value={socialMeadia} className="input-field" name="socialMeadia" onChange={(e) => { setSocialMeadia(e.target.value) }} />
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
                    <MobileNumber typeOfMobileNumber={typeOfMobileNumber} Mobile={Mobile} func={{ setTypeOfMobileNumber, setMobile }} />
                    <Address
                        typeOfAddress={typeOfAddress}
                        houseNumber={houseNumber}
                        street={street}
                        landmark={landmark}
                        society={society}
                        country={country}
                        state={state}
                        city={city}
                        pinCode={pinCode}
                        func={{ setTypeOfAddress, setHouseNumber, setStreet, setLandmark, setSociety, setCountry, setState, setCity, setPinCode }}
                    />

                    {/* <button className="add-component"> + Add another Mobile Number </button> */}
                    {/* <button className="add-component"> + Add another Address</button> */}
                    <br />
                    <button type="submit" onClick={(e) => handleSubmit(e)} className="form-sub-btn">Update</button>
                </form>
            </div>
        </>
    )
}
