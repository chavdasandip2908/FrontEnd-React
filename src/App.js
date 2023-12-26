import Header from "./myComponents/Header"
import RegisterForm from "./myComponents/RegisterForm"
import UserListing from "./myComponents/UserListing";
import Profile from "./myComponents/Profile";
import Test from "./myComponents/Test";
import EditUser from "./myComponents/EditUser";
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
          <Route path="/user-listing" element={<UserListing />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/edit" element={<EditUser />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
