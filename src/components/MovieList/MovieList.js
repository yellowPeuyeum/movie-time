import PropTypes from 'prop-types';
import classNames from 'classnames';

import { movieData } from './sampleData';
import './style.css';

const moviesData = movieData.map(movie => ({
  category: movie.Genre,
  desc: movie.Plot,
  poster: movie.Poster,
  rate: movie.imdbRating,
  title: movie.Title,
  year: movie.Year,
}));

export default function MovieList({ cols = 4 }) {
  const rootClass = classNames({
    'movies grid gap-4 grid-cols-2': true,
    'md:grid-cols-4':!cols || cols === 4,
    'md:grid-cols-5': cols === 5,
  })

  return (
    <div className={rootClass}>
      {moviesData.slice(0, 10).map(movie => (
        <div className="movie" key={`movie-item-${movie.title}`}>
          <div className="movie__poster">
            <span className="movie__rate">{movie.rate}</span>
            <figure className="movie__poster-container">
              <img
                className="movie__img"
                src={movie.poster}
                alt={`${movie.title} poster`}
              />
            </figure>
          </div>
          <div className="movie__body">
            <p className="movie__title">{movie.title}</p>
            <span className="movie__year">{movie.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

MovieList.propTypes = {
  cols: PropTypes.number,
};
