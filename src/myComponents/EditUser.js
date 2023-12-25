import React, { useState, useEffect } from 'react'
import UserData from './UserData'
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

export default function EditUser() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = UserData.map((e) => {
        return e.id;
    }).indexOf(id);


    const handleSubmit = (e) => {
        e.preventDefault();

        let a = UserData[index];
        a.Name = name;
        a.Age = age;
        history('/home');
    }

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
    }, []);


    return (
        <>
            <form action="#">
                <input type="text" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <input type="number" placeholder="enter your age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
                <button type="submit" onClick={(e) => handleSubmit(e)}>Upadate</button>
            </form>
        </>
    )
}
