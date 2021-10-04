import React from 'react';
import "./card.style.css";
import ImdbLogo from "../../assets/imdb-logo.png";

const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }
];

const find_genres = (genres_id) => {
    const finded_genres = [];
    genres_id.map(id => (
        genres.forEach((genreObj) => {
            if (id === genreObj.id) finded_genres.push(genreObj.name);
        })
    ));

    return finded_genres;
}

const Card = ({ type, movieTitle, tvTitle, posterUrl, overview, rate, movieId, bgUrl, genre_ids, releaseDate, first_air_date }) => {
    return (
        <div className="card" >
            <div className="poster-container">
                <a href={`https://www.themoviedb.org/${type}/${movieId}`} target="blank" >
                    <img className="poster" src={`https://image.tmdb.org/t/p/w500/${posterUrl}`} alt="poster" />
                </a>
            </div>

            <div className="wrap">
                {
                    bgUrl &&
                    <img className="card-background" src={`https://image.tmdb.org/t/p/w500/${bgUrl}`} alt="cover" />
                }
                <div className="informations">
                    <a className="movie-page-link" href={`https://www.themoviedb.org/${type}/${movieId}`} target="blank">
                        <h2 className="title">
                            {movieTitle && movieTitle}
                            {tvTitle && tvTitle}
                            {releaseDate && " (" + releaseDate.slice(0, 4) + ")"}
                            {first_air_date && " (" + first_air_date.slice(0, 4) + ")"}
                        </h2>
                    </a>

                    <div className="genres">
                        {
                            find_genres(genre_ids).map(genre => <span>{genre}</span>
                            )
                        }
                    </div>

                    <div className="rate-container">
                        <span className="rate">{rate}</span>
                        <span>/10</span>
                        <a href="https://www.imdb.com/" target="blank">
                            <img className="imdb-logo" src={ImdbLogo} alt="imdb" />
                        </a>
                    </div>

                    <p className="overview">{overview}</p>
                </div>
            </div>


        </div>
    )
}

export default Card;

