import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import './style.css';

export default function MovieList({
  // isLoading,
  // error,
  data: movies = [],
  cols = 4,
  max
}) {
  const rootClass = classNames({
    'movies grid gap-4 grid-cols-2': true,
    'md:grid-cols-4': !cols || cols === 4,
    'md:grid-cols-5': cols === 5,
  })

  return (
    <div className={rootClass}>
      {movies.slice(0, max).map(movie => (
        <div className="movie" key={`movie-item-${movie.title}`}>
          <div className="movie__poster">
            <span className="movie__rate">{movie.rate}</span>
            <figure className="movie__poster-container">
              <Image
                className="movie__img"
                src={movie.poster}
                alt={`${movie.title} poster`}
                height={300}
                width={300}
              />
            </figure>
          </div>
          <div className="movie__body">
            <p className="movie__title">
              <Link className="movie__link" href={`/movies/${movie._id}`}>
                {movie.title}
              </Link>
            </p>
            <span className="movie__year">{movie.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

MovieList.propTypes = {
  cols: PropTypes.number,
  // error: PropTypes.object,
  // isLoading: PropTypes.bool,
  max: PropTypes.number,
  movies: PropTypes.array,
};
