import React from "react";

export const Movies = ({title,year,summary,poster,genres}) => {
    return (
        <div className="movies-box__movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movies-box__data">
                <h3 className="movies-box__title">{title}</h3>
                <h5 className="movies-box__year">{year}</h5>
                <ul className="movies-box__genres">
                    {
                        genres.map((genre)=>(
                            <li>{genre}</li>
                        ))
                    }
                </ul>
                <p className="movies-box__summary">{summary}</p>
            </div>
        </div>
    );
};
