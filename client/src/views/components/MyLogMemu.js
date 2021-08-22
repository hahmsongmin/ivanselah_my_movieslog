import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {FaUserEdit} from "react-icons/fa";
import {AiOutlineUserDelete} from "react-icons/ai";

const UserEditIcon = styled(FaUserEdit)`
    font-size: 1.3rem;
    margin-left: 20px;
`;

const UserDeleteIcon = styled(AiOutlineUserDelete)`
    font-size: 1.3rem;
    margin-left: 20px;
`;
const MyLogMemu = () => {
    return (
        <div id="mySideNav" className="sideNav">
            <Link to="/user/edit" id="profileEdit">정보수정<UserEditIcon/></Link>
            <Link to="/user/delete" id="contact">회원탈퇴<UserDeleteIcon/></Link>
        </div> 
    )
};



export default MyLogMemu;