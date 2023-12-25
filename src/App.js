import Header from "./myComponents/Header"
import RegisterForm from "./myComponents/RegisterForm"
import UserListing from "./myComponents/UserListing";
import EditUser from "./myComponents/EditUser";
import Profile from "./myComponents/Profile";
// import Home from "./myComponents/Home";
// import AddUser from "./myComponents/AddUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./myComponents/generale.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/edit" element={<EditUser />}></Route>
          <Route path="/user-listing" element={<UserListing />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          {/* <Route path="/home" element={<Home />}></Route> */}
          {/* <Route path="/create" element={<AddUser />}></Route>*/}
        </Routes>
      </Router>
    </>
  );
}

export default App;
