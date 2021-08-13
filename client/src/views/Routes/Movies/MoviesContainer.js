import React from "react";
import MoviesPresenter from "./MoviesPresenter";

export default class extends React.Component {
    state = {
        result: null,
        error: null,
        loading: false,
    };

    render() {
        const { result, error, loading } = this.state;
        return (
            <MoviesPresenter
                result = {result}
                error = {error}
                loading = {loading}
            />
        )
    }
};