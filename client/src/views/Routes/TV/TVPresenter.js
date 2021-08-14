import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../components/Section";
import Loader from "../../components/Loader";

const Container = styled.div`
    padding: 50px 100px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => loading ? <Loader /> : (
    <Container>
        {topRated && topRated.length > 0 && <Section title="Top Rated TV">{topRated.map(tv=><span key={tv.id}>{tv.name}</span>)}</Section>}
    
        {popular && popular.length > 0 && <Section title="Popular TV">{popular.map(tv=><span key={tv.id}>{tv.name}</span>)}</Section>}

        {airingToday && airingToday.length > 0 && <Section title="AiringToday TV">{airingToday.map(tv=><span key={tv.id}>{tv.name}</span>)}</Section>}
    </Container>
);

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default TVPresenter;