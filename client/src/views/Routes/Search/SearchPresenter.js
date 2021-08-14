import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Loader from "../../components/Loader";
import Section from "../../components/Section";

const Container = styled.div`
    padding: 50px 100px;
`;

const Form = styled.form`
    width: 100%;
    margin-bottom: 50px;
`;

const Input = styled.input`
    color: white;
    all: unset;
    height: 50px;
    font-size: 2rem;
    text-align: center;
    &:focus {
        border-bottom: 1px solid #ffff;
    }
`;

const Button = styled.button`
    all: unset;
`;

const SearchIcon = styled(FaSearch)`
    font-size: 30px;
    cursor: pointer;
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;

`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, loading, handleSubmit, updateTerm }) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <SearchBox>
                <Input placeholder="검색어를 입력해주세요" value={searchTerm} onChange={updateTerm}></Input>
                <Button><SearchIcon /></Button>
            </SearchBox>
        </Form>
        {loading ? ( <Loader /> ) : (
        <>
           {movieResults && movieResults.length > 0 && <Section title="Movie Results">{movieResults.map(movie=><span key={movie.id}>{movie.title}</span>)}</Section>}
           {tvResults && tvResults.length > 0 && <Section title="TV Results">{tvResults.map(tv=><span key={tv.id}>{tv.name}</span>)}</Section>}
        </>
        )}
    </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;