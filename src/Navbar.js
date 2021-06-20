import React from "react";
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
  function Navbar() {
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={linkStyles}
          /* add prop for activeStyle */
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
  
        <NavLink
          to="/signup"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Sign Up
        </NavLink>
  
        <NavLink
          to="/message"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Message
        </NavLink>
      </div>
    );
  }

  export default Navbar;