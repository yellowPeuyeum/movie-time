import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import './style.css'

export default function OverviewDetail({
  description,
  genre,
  metaList,
  poster,
  rating,
  title,
  year,
}) {
  return (
    <div className="overview">
      <div className="overview-container">
        <div className="overview-poster">
          <div className="movie-poster">
            <Image
              className="movie-poster__img"
              // src="https://m.media-amazon.com/images/M/MV5BMjEzYmZkNjktODBmYi00NzNkLWIzMjItMjhkMWZiZTZlN2MwXkEyXkFqcGc@._V1_SX500.jpg"
              src={poster}
              alt="movie poster"
              width={220}
              height={330}
            />
          </div>
        </div>
        <div className="overview-content">
          <div className="overview-header">
            <div className="movie-year">{year}</div>
            <div className="movie-title">{title}</div>
            <div className="movie-genre">{genre}</div>
          </div>

          {metaList && (
            <div className="overview-meta">
              <div className="overview-meta__backdrop" />
              <div className="overview-meta__container">
                <div className="overview-meta__item-highlight">
                  ⭐️ {rating}
                </div>
                {metaList.map((meta, index) => (
                <Fragment key={`meta-${meta.label}`}>
                  {index !== 0 && (
                    <div className="overview-meta__divider" />
                  )}
                  <div className="overview-meta__item">
                    <div className="overview-meta__label">{meta.label}</div>
                    <div className="overview-meta__value">{meta.value}</div>
                  </div>
                </Fragment>
              ))}
              </div>
            </div>
          )}

          <div className="overview-body">
            <div className="overview-title">Overview</div>
            <p className="overview-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

OverviewDetail.propTypes = {
  description: PropTypes.string,
  genre: PropTypes.string,
  metaList: PropTypes.array,
  poster: PropTypes.string,
  rating: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
};
