import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import AllUserData from './UserData'
export default function Profile() {
    const UserData = JSON.parse(localStorage.getItem("Data"));

    let history = useNavigate();
    const handleDelete = (id) => {
        var index = AllUserData.map((e) => {
            return e.id;
        }).indexOf(id);
        AllUserData.splice(index, 1)
        history("/user-listing");
    };

    const handleEdit = (data) => {
        // Check if localStorage is available
        if (typeof localStorage !== 'undefined' && localStorage !== null) {
            localStorage.setItem("Data", JSON.stringify(data));
        } else {
            console.error('Local storage is not available');
        }
    };

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5">

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img
                                    src={UserData.personalInfo.profile ? UserData.personalInfo.profile : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"}
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: 150 }}
                                />
                                <h5 className="my-3">{UserData.personalInfo.username}</h5>
                                <div className="d-flex justify-content-center mb-2">
                                    <Link to={'/edit'}>
                                        <Button onClick={() => { handleEdit(UserData) }} className='btn btn-primary'>Edit</Button>&nbsp;
                                    </Link>
                                    <Button onClick={() => { handleDelete(UserData.id) }} className='btn btn-danger'>Delete</Button>&nbsp;
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4 ">
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush rounded-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fas fa-globe fa-lg text-warning" />
                                        <p className="mb-0">
                                            <a href={UserData.personalInfo.socialMedia} target='_blank'>{UserData.personalInfo.socialMedia}</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card mb-4 ">
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush rounded-3">
                                    <p className="m-3" >
                                        <b>Contact Information</b>
                                    </p>
                                    <p className="mb-0 mx-3" >
                                        Contact Type : {UserData.contactInfo.typeOfMobileNumber}
                                    </p>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <div className="col-sm-4">
                                            <p className="mb-0">MobileNo.</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{UserData.contactInfo.Mobile}</p>
                                        </div>
                                    </li>
                                </ul>
                                {/* <hr /> */}
                                {/* <ul className="list-group list-group-flush rounded-3">
                                    <p className="mb-0 mx-3" >
                                        Contact Type : {UserData.contactInfo.typeOfMobileNumber}
                                    </p>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <div className="col-sm-4">
                                            <p className="mb-0">MobileNo.</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{UserData.contactInfo.Mobile}</p>
                                        </div>
                                    </li>
                                </ul> */}


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <p className="mb-4">
                                    <b>Personal Information</b>
                                </p>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Full Name</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.personalInfo.firstname + " " + UserData.personalInfo.lastname}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.personalInfo.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Gender</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.personalInfo.gender}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Preferred Language</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.personalInfo.preferredLanguage}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Education</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.personalInfo.education}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                                <p className="mb-4">
                                    <b>Address Information</b>
                                </p>
                                <p className="mb-4">
                                    Address type : {UserData.addressInfo.typeOfAddress}
                                </p>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">HouseNo</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.addressInfo.houseNumber}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">street</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.addressInfo.street}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">landmark</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.addressInfo.landmark}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">society</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.addressInfo.society}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">country</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.addressInfo.country}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">state</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.addressInfo.state}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">city</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.addressInfo.city}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">pinCode</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{UserData.addressInfo.pinCode}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
