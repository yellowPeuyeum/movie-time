import PropTypes from 'prop-types';
import Image from 'next/image';

export default function SliderItem({
  category,
  desc,
  poster,
  rate,
  title,
  year,
}) {
  return (
    <div className="slider__slide">
      <div className="slider__item">
        <div className="slider__poster">
          <figure className="slider__poster-container">
            <Image
              className="slider__img"
              src={poster}
              alt={`${title} poster`}
              width={300}
              height={300}
            />
          </figure>
        </div>
        <div className="slider__content">
          <span className="slider__rate">⭐️ {rate}</span>
          <h3 className="slider__title">{title}</h3>
          <div className="slider__meta">
            <span className="slider__meta-item">{year}</span>
            <span className="slider__meta-item">{category}</span>
          </div>
          <div className="slider__desc">{desc}</div>
        </div>
      </div>
    </div>  
  );
}

SliderItem.propTypes = {
  category: PropTypes.string,
  desc: PropTypes.string,
  poster: PropTypes.string,
  rate: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
};
