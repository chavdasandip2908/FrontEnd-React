import React, { useState } from 'react'

export default function Address(Props) {

    return (
        <div>
            <div className="address-components">
                <div className="field-group">
                    <div className="fiels">
                        <label htmlFor="typeAddress" className="field-name">Type of Address</label>
                        <select name="typeAddress" id="typeAddress" onChange={(e) => Props.func.setTypeOfAddress(e.target.value)}>
                            <option value="null">Please Select</option>
                            <option value="office">office</option>
                            <option value="home">Home</option>
                        </select>
                        <div className="message">type of mobile number.</div>
                    </div>
                    <div className="fiels">
                        <label htmlFor="houseNum" className="field-name">House No.</label>
                        <input type="number" id="houseNum" className="input-field" name="houseNum" onChange={(e) => Props.func.setHouseNumber(e.target.value)} />
                        <div className="message">enter House Number</div>
                    </div>
                </div>
                <br />
                <div className="field-group">
                    <div className="fiels">
                        <label htmlFor="street" className="field-name">Street</label>
                        <input type="text" id="street" className="input-field" name="street" onChange={(e) => Props.func.setStreet(e.target.value)} />
                        <div className="message">enter street name</div>
                    </div>
                    <div className="fiels">
                        <label htmlFor="landmark" className="field-name">Landmark</label>
                        <input type="text" id="landmark" className="input-field" name="landmark" onChange={(e) => Props.func.setLandmark(e.target.value)} />
                        <div className="message">enter landmark name</div>
                    </div>
                </div>
                <br />
                <div className="field-group">
                    <div className="fiels">
                        <label htmlFor="society" className="field-name">Society</label>
                        <input type="text" id="society" className="input-field" name="society" onChange={(e) => Props.func.setSociety(e.target.value)} />
                        <div className="message">enter society name</div>
                    </div>
                    <div className="fiels">
                        <label htmlFor="country" className="field-name">Country</label>
                        <select name="country" id="country" onChange={(e) => Props.func.setCountry(e.target.value)} >
                            <option value="null">Please Select</option>
                            <option value="office">office</option>
                            <option value="home">Home</option>
                        </select>
                        <div className="message">type of mobile number.</div>
                    </div>
                </div>
                <br />
                <div className="field-group">
                    <div className="fiels">
                        <label htmlFor="state" className="field-name">State</label>
                        <select name="state" id="state" onChange={(e) => Props.func.setState(e.target.value)} >
                            <option value="null">Please Select</option>
                            <option value="office">office</option>
                            <option value="home">Home</option>
                        </select>
                        <div className="message">type of mobile number.</div>
                    </div>
                    <div className="fiels">
                        <label htmlFor="city" className="field-name">City</label>
                        <select name="city" id="city" onChange={(e) => Props.func.setCity(e.target.value)} >
                            <option value="null">Please Select</option>
                            <option value="office">office</option>
                            <option value="home">Home</option>
                        </select>
                        <div className="message">type of mobile number.</div>
                    </div>
                </div>
                <br />
                <div className="field-group">
                    <div className="fiels">
                        <label htmlFor="pinCode" className="field-name">Pin Code</label>
                        <input type="number" id="pinCode" className="input-field" name="pinCode" onChange={(e) => Props.func.setPinCode(e.target.value)} />
                        <div className="message">enter House Number</div>
                    </div>
                </div>
                <br />

            </div>
        </div>
    )
}
