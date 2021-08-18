import React from "react";
import { moviesApi, tvApi } from "../../../Api";
import MyLogPresenter from "./MyLogPresenter";

class MyLogContainer extends React.Component {
    constructor(props) {
        super(props);
        const { location : { pathname } } = props;
        this.state = {
            result: null,
            error: null,
            loading: false,
            isMovie: pathname.includes("/movie/")
        };
    }

    async componentDidMount() {
        const { match : { params : { id } } } = this.props;
        const { isMovie } = this.state;
        const numberId = Number(id); 
        
        let result = null;
        let videos = null;
        try{
            if(isMovie) {
                // const 빼고 처리 방법  동일방법 ==== const { data : result }
                ({ data : result }= await moviesApi.movieDetail(numberId));
                ({ data : { videos : { results : videos }}}= await moviesApi.movieDetail(numberId));
            } else {
                ({ data : result }= await tvApi.tvDetail(numberId));
                ({ data : { videos : { results : videos }}}= await tvApi.tvDetail(numberId));
            }
        }catch {
            this.setState({error : "Can't find anything."});
        }finally {
            this.setState({ loading: false, result, videos });
        }
    }

    render() {
        const { result, videos, error, loading } = this.state;
        console.log(this.state);
        return (
            <MyLogPresenter
                result = {result}
                videos = {videos}
                error = {error}
                loading = {loading}
            />
        )
    }
};

export default MyLogContainer;