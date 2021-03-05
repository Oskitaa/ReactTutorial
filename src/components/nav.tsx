import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.scss";

function Nav(){
        return (
            <div>
                <ul className="nav-menu">
                <Link to="/" >
                    <li className="item-menu">Home</li>
                </Link>
                <Link to="/repository" >
                    <li className="item-menu">Repositorios</li>
                </Link>
               </ul>
            </div>
        );
}

export default Nav;