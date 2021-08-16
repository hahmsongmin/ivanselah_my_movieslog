import React from "react";
import { moviesApi } from "../../../Api";
import HomePresenter from "./HomePresenter";


class HomeContainer extends React.Component{
    state = {
        nowPlaying: null,
        error: null,
        loading: true,
    };
    async componentDidMount(){
        let videos = null;
        try{
            const {data : {results : nowPlaying }} = await moviesApi.nowPlaying();
            const moviesId = nowPlaying.map(movieId => movieId.id)
            const movieId = moviesId[0];
            ({ data : { videos : { results : videos }}}= await moviesApi.movieDetail(movieId));
        this.setState({
            nowPlaying
        });
        }catch{
            this.setState({
                error: "Can't find movies informaion."
            })
        }finally{
            this.setState({loading: false, videos})
        }
    }
    render() {
        console.log(this.state);
        const { nowPlaying, videos, error, loading } 
        = this.state;
        return (
            <HomePresenter 
            nowPlaying = {nowPlaying} 
            videos = {videos}
            error = {error}
            loading = {loading}
            />
        );
    }
}

export default HomeContainer;