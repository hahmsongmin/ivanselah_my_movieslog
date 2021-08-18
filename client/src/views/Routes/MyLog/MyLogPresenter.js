import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/Loader";
import Helmet from "react-helmet";
import Message from "../../components/Message";

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: calc(100vh - 50px);
    margin-left: -50px;
    position: relative;
`;

const Backdrop = styled.div`
    position: absolute;
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
    padding: 10px;
    width: 100%;
    height: 100%;
    color: #ffff;
    font-weight: bold;
    margin-left: 10px;
    z-index: 21;
`;

const Data = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ffff;
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 10px;
`;

const Year = styled.span`
    font-size: 20px;
`;

const Divider = styled.span`
    margin: 0px 5px;
    font-size: 40px;
`;

const Item = styled.div``;

const Overview = styled.p`
    line-height: 30px;
`;

const Company = styled.div`
    color: #f39c12;
    font-weight: bold;
`;


const MyLogPresenter = ({ result , videos, error, loading }) => (
    loading ? 
    ( 
     <>
        <Helmet>
            <title>Loading | Logflix</title>
        </Helmet>
        <Loader /> 
     </>
    ) : (
        error ? <Message /> : 
        <Container>
        <Helmet>
            <title>
                {`${result?.original_title ? result?.original_title : result?.original_name} | Logflix`}
            </title>
         </Helmet>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result?.backdrop_path}`}/>
            <ContainerInner>
                <Cover bgImage={`https://image.tmdb.org/t/p/original/${result?.poster_path}`}/>
                <Content>
                        <Title>{result?.original_title ? result?.original_title : result?.original_name}</Title>
                    <Data>
                        <InfoContainer>
                            <Year>{result?.release_date ? result?.release_date ? result?.release_date.split("-")[0] : "" : result?.first_air_date ? result?.first_air_date.substring(0, 4) : ""}</Year>
                            <Divider>·</Divider>
                            <Item>
                                {result?.runtime ? result?.runtime : result?.episode_run_time} min
                            </Item>
                            <Divider>·</Divider>
                             <Item>
                                {result?.genres && result?.genres.map((genre, index)=> index === result?.genres.length - 1 ? genre.name : `${genre.name} /`)}
                            </Item>
                            <Divider>·</Divider>
                            <Item>
                                {result?.production_countries.length > 0 ? result?.production_countries[0].name : result?.production_companies[0].origin_country}
                            </Item>
                            <Company>
                                {result?.production_companies.length > 0 ? `⭐${result?.production_companies[0].name}` : null }
                            </Company>
                        </InfoContainer>
                        <Overview>{result?.overview ? result?.overview : ""}</Overview>
                    </Data>
                    <iframe className="youtube" src={videos?.length > 0 ? `https://www.youtube.com/embed/${videos[0].key}?autoplay=1&loop=1&playlist=${videos[0].key}` : ""} allowfullscreen="" frameborder="0"></iframe>
                </Content>
            </ContainerInner>
        </Container>
    )
);

MyLogPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default MyLogPresenter;
