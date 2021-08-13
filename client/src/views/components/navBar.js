import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SLink = styled(Link)`
    color : ${props => props.current ? "#ffff" : "$mainColor" };
    transition: color 0.5s ease-in-out;
`;

const NavBar = ({ location : { pathname }}) => {
    return (
        <header className="nav-container">
            <div className="nav__header">
                <div className="nav__navigation-left">
                    <SLink to="/"><div className="nav__logo">LOGFLIX</div></SLink>
                    <SLink to="/movies" current={pathname === "/movies"}>영화</SLink>
                    <SLink to="/tv" current={pathname === "/tv"}>TV프로그램</SLink>
                    <SLink to="/search" current={pathname === "/search"}>검색</SLink>
                </div>
                <div className="nav__navigation-right">
                    <Link to="/login">로그인</Link>
                    <Link to="/join">가입하기</Link>
                </div>
            </div>
        </header>  
    )
};
export default withRouter(NavBar);