import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HomeSection from "../../components/HomeSection";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import HomePoster from "../../components/HomePoster";
import Helmet from "react-helmet";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 30;
`;


const HomeText = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    h1 {
        font-size: 66px;
    }
    p {
        margin-top: 10px;
        font-size: 30px;
    }
`;

const HomeTextButton = styled.button`
    margin-top: 30px;
    padding: 15px 25px;
    font-size: 33px;
    font-weight: bold;
    text-align: center;
    outline: none;
    color: #fff;
    background-color: #e20813;
    border: none;
    border-radius: 25px;
`;


const HomePresenter = ({popular, videos, error, loading}) => (
    <>
        <Helmet>
            <title>Welcome | Logflix</title>
        </Helmet>
        {loading ? ( 
        <Loader /> 
        ) : (
        <Container>
            <HomeSection>
                <HomePoster popular={popular}/>
                <HomeText>
                    <h1>영화, TV프로그램 정보를 검색, 기록</h1>
                    <p>콘텐츠를 저장하고 기록하세요.</p>
                    <HomeTextButton>가입하고 이용시작</HomeTextButton>
                </HomeText>
                {error && <Message color="#e74c3c" text={error} />}
                <iframe className="HomeYoutube" src={videos?.length > 0 ? `https://www.youtube.com/embed/${videos[0].key}?&autoplay=1&loop=1&autohide=1&playlist=${videos[0].key}` : ""}></iframe>
            </HomeSection>
        </Container>
        )}
    </>
);

HomePresenter.propTypes = {
    popular: PropTypes.array,
    videos: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};


export default HomePresenter;
