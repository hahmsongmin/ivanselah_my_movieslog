import './App.css';
import "./scss/base.scss";
import axios from "axios";
import React from 'react';
import Navbar from "./nav/navBar";
import {Movies} from "./containers/main";


class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    const {data: {movies}} = await axios("http://localhost:7777/", {method: "GET"})
    .then(respone => respone);
    this.setState({movies, isLoading: false});
    // console.log(typeof movies, movies);
  };
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <>
        <Navbar />
        <main>
            {isLoading ? (
              <div className="loader">
                <span className="loader__text">Loading...</span>
              </div>
            ) : (
              <div className="movies-box">
                {movies.map(movie => (
                <Movies
                  key={movie.id}
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                  genres={movie.genres}
                />
                ))}
            </div>
          )}
        </main>
      </>
    )
  }
};


export default App;

