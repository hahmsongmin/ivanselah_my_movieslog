import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const SLink = styled(Link)`
    color : ${(props) => {return Boolean(props.current) ? "#ffff" : "$mainColor" }};
    transition: color 0.5s ease-in-out;
`;


const NavBar = ({ location : { pathname }}) => {

    const LoginSeccess = sessionStorage.getItem('loggedIn');
    return (
        <>
        {LoginSeccess ? (
            <header className="nav-container">
                <div className="nav__header">
                    <div className="nav__navigation-left">
                        <SLink to="/" current={(pathname === "/")}><div className="nav__logo">LOGFLIX</div></SLink>
                        <SLink to="/movies" current={(pathname === "/movies")}>영화</SLink>
                        <SLink to="/tv" current={(pathname === "/tv")}>TV프로그램</SLink>
                        <SLink to="/search" current={(pathname === "/search")}>검색</SLink>
                    </div>
                    <div className="nav__navigation-right">
                        <Link onClick={async()=>{
                                const response = await axios("http://localhost:7777/logout", {
                                    method : "get",
                                    withCredentials: true,
                                })
                                if(response.data.logoutIn){
                                    sessionStorage.removeItem('loggedIn');
                                }}, () => {
                                    sessionStorage.removeItem('loggedIn');
                                    window.location.replace("/");
                                }}
                        >로그아웃</Link>
                        <Link to="/mylog">내공간</Link>
                    </div>
                </div>
            </header>  
        ) : (
            <header className="nav-container">
                <div className="nav__header">
                    <div className="nav__navigation-left">
                        <SLink to="/" current={(pathname === "/")}><div className="nav__logo">LOGFLIX</div></SLink>
                    </div>
                    <div className="nav__navigation-right">
                        <Link to="/login">로그인</Link>
                        <Link to="/join">가입하기</Link>
                    </div>
                </div>
            </header>  
            
        )}
    </>
    )
};
export default withRouter(NavBar);
// https://wonit.tistory.com/303 참고
// withRouter는 Router가 아닌 component에게 Router특성을 부여
// Router는 location, match, history를 사용

