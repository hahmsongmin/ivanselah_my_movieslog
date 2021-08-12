import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="nav-container">
            <div className="nav-container__header">
                <Link to="/"><div className="nav-container__logo">MOVIESLOG</div></Link>
                <div className="nav-container__navigation">
                    <Link to="/search">Search</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/join">Join</Link>
                </div>
            </div>
        </header>  
    )
};
export default NavBar;