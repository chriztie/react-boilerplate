import  React  from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const activeStyle = {color:"grey"};

    return (
        <header>
        <nav>
            <NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink>
            <NavLink to="/users" activeStyle={activeStyle}>Users</NavLink>
            <NavLink to="/admin" activeStyle={activeStyle}>Admins</NavLink>
        </nav>
        </header>
    )
}

export default Header;