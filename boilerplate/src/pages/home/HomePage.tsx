import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const HomePage = () : ReactElement =>(
    <div>
        <h1>This is the home page</h1>
        <Link to="about">About us</Link>
        
    </div>
)

export default HomePage;