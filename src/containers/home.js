import React from "react";

export const Movies = ({title,year,summary,poster,genres}) => {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">
                    {
                        genres.map((genre)=>(
                            <li>{genre}</li>
                        ))
                    }
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    );
};
