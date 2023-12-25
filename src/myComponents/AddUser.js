import React, { useState } from 'react'
import UserData from './UserData'
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        if (!name || !age) return;

        UserData.push({ id: uniqueId, Name: name, Age: age });

        history('/home');
    }


    return (
        <>
            <form action="#">
                <input type="text" placeholder="enter your name" onChange={(e) => setName(e.target.value)} /><br />
                <input type="number" placeholder="enter your age" onChange={(e) => setAge(e.target.value)} /><br />
                <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </>
    )
}
