import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.div`
    background-image: url(${props => `https://image.tmdb.org/t/p/w300${props.bgUrl}`});
    height: 450px;
    background-size: cover;
    border-radius: 20px;
    margin-bottom: 10px;
    transition: opacity 0.1s linear;
`;

// Scss 로

const MyLogPoster = ({logText, createdAt, id, title, imageUrl }) => {
    return (
        <div className="container">
            <div className="log-container">
                <div className="log__inner">
                    <div className="log__inner-front">
                        <Image bgUrl={imageUrl} />
                    </div>
                    <div className="log__inner-back">
                        <div className="log__inner-text">
                            <div>{title}</div>
                            <div>{logText}</div>
                            <div>{createdAt}</div>
                            <Link to={`/movie/${id}`}>자세히</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

MyLogPoster.propTypes = {
    id : PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
};


export default MyLogPoster;