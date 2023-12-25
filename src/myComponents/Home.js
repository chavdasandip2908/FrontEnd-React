import React from 'react'
import UserData from './UserData'
import { Link, useNavigate } from "react-router-dom";

export default function Home() {

  let history = useNavigate();

  const handleDelete = (id) => {
    var index = UserData.map((e) => {
      return e.id;
    }).indexOf(id);
    UserData.splice(index, 1)
    history("/home");
  };

  const handleEdit = (id, name, age) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
  }

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            UserData && UserData.length > 0 ?
              UserData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>
                      <Link to={'/edit'}>
                        <button onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edit</button>
                      </Link>
                      &nbsp;
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                )
              }) : "NO Data Found"
          }

        </tbody>
      </table>
      <Link to={'/create'}>
        <button>Create new User</button>
      </Link>
    </div>
  )
}
