import './App.css';
import axios from "axios";
import React from 'react';
import {Movies} from "./containers/home";


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
    return(
      <section>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
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
      </section>
    )
  }
};


export default App;

