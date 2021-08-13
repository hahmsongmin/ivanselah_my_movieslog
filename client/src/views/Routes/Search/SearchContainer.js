import React from "react";
import { moviesApi, tvApi } from "../../../Api";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: false,
    };

    handleSubmit = () => {
        const { serachTerm } = this.state;
        if(serachTerm !== ""){
            this.searchByTerm();
        }
    };

    searchByTerm = async() => {
        const { serachTerm } = this.state;
        this.setState({ loading : true });
        try {
            const {data: {resutls : movieResults }} = await moviesApi.search(serachTerm);
            const {data: {resutls : tvResults }}=  await tvApi.search(serachTerm);
            this.setState({ 
                movieResults,
                tvResults,
            });
            
        } catch {
            this.state({ error : "Can't find results."});
        } finally {
            this.setState({ loading : false });
        }
    };

    render() {
        const { movieResults, tvResults, searchTerm, error, loading } = this.state;
        return (
            <SearchPresenter
                movieResults = {movieResults}
                tvResults = {tvResults}
                searchTerm = {searchTerm}
                error = {error}
                loading = {loading}
                handleSubmit = {this.handleSubmit}
            />
        )
    }
};