import React from "react";
import { Link } from "react-router-dom";

function Nav(){
        return (
            <div>
                <ul>
                <Link to="/" >
                    <li>Home</li>
                </Link>
                <Link to="/repository" >
                    <li>Repository</li>
                </Link>
               </ul>
            </div>
        );
}

export default Nav;