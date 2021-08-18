import axios from "axios";
import React from "react";
import { moviesApi } from "../../../Api";
import HomePresenter from "./HomePresenter";


class HomeContainer extends React.Component{
    state = {
        popular: null,
        videos: null,
        error: null,
        user : null,
        loading: true,
    };
    async componentDidMount(){
        let videos = null;
        let movieId = null;
        try{
            const {data : {results : popular }} = await moviesApi.popular();
            const moviesId = popular.map(movieId => movieId.id)
            while(true){
                movieId = moviesId[Math.floor(Math.random() * 10)];
                if(movieId){
                    ({ data : { videos : { results : videos }}}= await moviesApi.movieDetail(movieId));
                    if (videos.length === 0){
                        continue;
                    } else {
                        break;
                    }
                }
            }
        this.setState({
            popular,
        });
        }catch{
            this.setState({
                error: "Can't find movies informaion."
            })
        }finally{
            this.setState({loading: false, videos})
        }
        const user = await axios("http://localhost:7777/", {
            method : "get",
            withCredentials: true
        });
        this.setState({ user : user.data.username })
    }
    render() {
        const { popular, videos, user, error, loading } 
        = this.state;
        console.log(this.state);
        return (
            <HomePresenter 
            popular = {popular} 
            videos = {videos}
            user = {user}
            error = {error}
            loading = {loading}
            />
        );
    }
}

export default HomeContainer;