import React from 'react'
import UserData from './UserData'
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';

export default function UserListing() {

    let history = useNavigate();

    const handleDelete = (id) => {
        var index = UserData.map((e) => {
            return e.id;
        }).indexOf(id);
        UserData.splice(index, 1)
        history("/user-listing");
    };

    const handleEdit = (data) => {
        // Check if localStorage is available
        if (typeof localStorage !== 'undefined' && localStorage !== null) {
            localStorage.setItem("Data", JSON.stringify(data));
            // ... rest of your code
        } else {
            console.error('Local storage is not available');
        }
    };



    return (
        <div>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th rowSpan={2}>FullName</th>
                        <th rowSpan={2}>Username</th>
                        <th rowSpan={2}>Email</th>
                        <th rowSpan={2}>DOB</th>
                        <th rowSpan={2}>Gender</th>
                        <th rowSpan={2}>SocialMedia</th>
                        <th rowSpan={2}>Mobile</th>
                        <th >Address</th>
                        <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <Table striped bordered hover variant="light">
                                <tr>
                                    <th>HouseNo.</th>
                                    <th>Street</th>
                                    <th>LandMark</th>
                                    <th>society</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>city</th>
                                    <th>Pincode</th>
                                </tr>
                            </Table>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        UserData && UserData.length > 0 ?
                            UserData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.personalInfo.firstname + " " + item.personalInfo.lastname}</td>
                                        <td>{item.personalInfo.username}</td>
                                        <td>{item.personalInfo.email}</td>
                                        <td>{item.personalInfo.dob}</td>
                                        <td>{item.personalInfo.gender}</td>
                                        <td>{item.personalInfo.socialMedia}</td>
                                        <td>{item.contactInfo.Mobile}</td>
                                        <td>
                                            <Table striped bordered hover variant="light">
                                                <tr>
                                                    <td>{item.addressInfo.houseNumber}</td>
                                                    <td>{item.addressInfo.street}</td>
                                                    <td>{item.addressInfo.landmark}</td>
                                                    <td>{item.addressInfo.society}</td>
                                                    <td>{item.addressInfo.country}</td>
                                                    <td>{item.addressInfo.state}</td>
                                                    <td>{item.addressInfo.city}</td>
                                                    <td>{item.addressInfo.pinCode}</td>
                                                </tr>
                                            </Table>
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                                <Button onClick={() => { handleEdit(item) }} className='btn btn-primary'>Edit</Button>&nbsp;
                                            </Link>
                                            <Button onClick={() => { handleDelete(item.id) }} className='btn btn-danger'>Delete</Button>&nbsp;
                                            <Button onClick={() => { history("/profile");}} className='btn btn-info'>View</Button>&nbsp;
                                        </td>

                                    </tr>
                                )
                            }) : "NO Data Found"
                    }

                </tbody>
            </Table>
        </div>
    )
}
