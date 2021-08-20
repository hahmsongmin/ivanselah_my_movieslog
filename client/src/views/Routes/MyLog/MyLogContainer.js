import axios from "axios";
import React, {Component} from "react";
import { moviesApi, tvApi } from "../../../Api";
import MyLogPresenter from "./MyLogPresenter";

class MyLogContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents : null,
            username : null,
            moviesResults: null,
            tvResults : null, 
            error: null,
            loading: true,
        };
    }
    async componentDidMount() {
        let temp = null;
        try {
            const { data } = await axios("http://localhost:7777/myLogInfo", {
            method : "post",
            withCredentials: true})
            this.setState({
                username : data.user.username,
            })
            temp = data.myLog.contents;
        } catch(error) {
            this.setState({ error : error.message })
        }
        temp.map(async(item)=>{
            let movies = null;
            let tv = null;
            try{
                movies = await moviesApi.movieDetail(item.logId);
                tv = await tvApi.tvDetail(item.logId);    
            }catch(error){
                this.setState({ error : error.message })
            }finally {
                this.setState({
                    moviesResults : movies,
                    tvResults : tv,
                    loading : false,
                })
            } 
        })
    }
    render() {
        const { moviesResults, tvResults, username, error, loading } = this.state;
        return (
            <MyLogPresenter
                moviesResults = {moviesResults}
                tvResults = {tvResults}
                username = {username}
                error = {error}
                loading = {loading}
            />
        )
    }
};

export default MyLogContainer;