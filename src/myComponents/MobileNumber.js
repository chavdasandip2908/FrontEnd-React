import React from 'react'

export default function MobileNumber(Props) {
    return (
        <div>
            <div className="mobile-number-components">
                <div className="field-group">
                    <div className="fiels">
                        <label htmlFor="typeNum" className="field-name">Type of Number</label>
                        <select name="typeNum" id="typeNum" onChange={(e) => Props.func.setTypeOfMobileNumber(e.target.value)}>
                            <option value="null">Please Select</option>
                            <option value="office">office</option>
                            <option value="home">Home</option>
                        </select>
                        <div className="message">type of mobile number.</div>
                    </div>
                    <div className="fiels">
                        <label htmlFor="mobile" className="field-name">Mobile Number</label>
                        <input type="number" id="mobile" className="input-field" name="mobile" onChange={(e) => Props.func.setMobile(e.target.value)} />
                        <div className="message">enter mobile number</div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}
