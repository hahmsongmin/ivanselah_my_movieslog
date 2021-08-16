import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
    padding: 50px 0px;
    width: 100%;
`;


const HomePresenter = ({nowPlaying, videos, error, loading}) => (
    <>
        <Helmet>
            <title>Welcome | Logflix</title>
        </Helmet>
        {loading ? ( 
        <Loader /> 
        ) : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && <Section title="현재 상영영화">{nowPlaying.map(movie => 
            <Poster 
                key={movie.id} 
                id={movie.id} 
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date ? movie.release_date.split("-")[0] : ""}
                isMovie={true}
            />)}</Section>}

            {error && <Message color="#e74c3c" text={error} />}
        </Container>
        )}
    </>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    videos: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};


export default HomePresenter;
