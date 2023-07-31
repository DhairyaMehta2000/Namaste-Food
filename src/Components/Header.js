import { useState } from "react";
import { Link } from "react-router-dom";
import { resLogo } from "../utils/constants";
import './styles.css'
const Header = () => {
  // Creating state to know value of Login status
  const [logStatus, setLogStatus] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={resLogo} className="pizzeria-img" alt="res-img"></img>
        <h6 className="title font-bold">Eat Street</h6>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        {/* button for logging in and out */}
        <button
          className="link"
          onClick={() => {
            logStatus === "Login"
              ? setLogStatus("Logout")
              : setLogStatus("Login");
          }}
        >
          {logStatus}
        </button>
      </div>
    </div>
  );
};

export default Header;
