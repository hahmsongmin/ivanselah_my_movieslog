import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/Loader";

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: calc(100vh - 50px);
    margin-left: -50px;
    position: relative;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const ContainerInner = styled.div`
    padding: 100px 100px;
    display: flex;
    width: 100%;
`;

const Cover = styled.div`
    margin-top: -20px;
    width: 40%;
    border-radius: 10px;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    z-index: 20;
`;

// 부모에 width 없으면 자식에게도 width 없음
const Content = styled.div`
    width: 100%;
    height: 100%;
    z-index: 2;
`;

const Data = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Title = styled.div`
    font-size: 3rem;
    color: #ffff;
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;

`;

const Year = styled.span`
    font-size: 30px;
    margin-left: 10px;
`;

const Divider = styled.span``;

const Overview = styled.p``;

const DetailPresenter = ({ result , error, loading }) => (
    loading ? 
    ( 
    <Loader /> 
    ) : (
        <Container>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result?.backdrop_path}`}/>
            <ContainerInner>
                <Cover bgImage={`https://image.tmdb.org/t/p/original/${result?.poster_path}`}/>
                <Content>
                    <Data>
                        <Title>{result?.original_title ? result?.original_title : result?.original_name}</Title>
                        <Year>{result?.release_date ? result?.release_date ? result?.release_date.split("-")[0] : "" : result?.first_air_date ? result?.first_air_date.substring(0, 4) : ""}</Year>
                    </Data>
                        <InfoContainer>
                        </InfoContainer>
                </Content>
            </ContainerInner>
        </Container>
    )
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
