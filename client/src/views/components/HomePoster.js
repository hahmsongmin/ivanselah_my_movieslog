import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
   margin-top: -60px;
`;

const Image = styled.div`
    position: relative;
    background-image: url(${props => `https://image.tmdb.org/t/p/original/${props.bgUrl}`});
    height: 500px;
    background-size: cover;
    background-position: center center;
    opacity: 0.5;
    z-index: 0;
`;

const HomePoster = ({popular}) => (
    <Container>
        {
         popular.map((movie, index) => index < 2 ? <Image bgUrl={movie.backdrop_path} /> : "")
        }
    </Container>
)

HomePoster.propTypes = {
    id : PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
};


export default HomePoster;