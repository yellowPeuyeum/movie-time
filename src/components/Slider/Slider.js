'use client';

import PropTypes from 'prop-types';
import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel from 'embla-carousel-react'

import SliderDot, { useDotButton } from './SliderDot'
import SliderItem from './SliderItem'
import './style.css';

const movieData = [
  {
    Title: 'Interstellar',
    Year: '2014',
    Genre: 'Adventure, Drama, Sci-Fi',
    Plot: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    Poster: `https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg`,
    imdbRating: '8.7',
  },
  {
    Title: 'One Day',
    Year: '2011',
    Genre: 'Drama, Romance',
    Plot: 'After spending the night together on the eve of their college graduation, Dexter and Emma are shown each year on the same date to see where they are in their lives. They are sometimes together, and sometimes not.',
    Poster: `https://m.media-amazon.com/images/M/MV5BMTQ3NTg2MDI3NF5BMl5BanBnXkFtZTcwMjc5MTA1NA@@._V1_SX300.jpg`,
    imdbRating: '7.0',
  },
  {
    Title: 'Fury',
    Year: '2014',
    Genre: 'Action, Drama, War',
    Plot: 'A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.',
    Poster: `https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SX300.jpg`,
    imdbRating: '7.6',
  }
];

const slidesData = movieData.map(movie => ({
  category: movie.Genre,
  desc: movie.Plot,
  poster: movie.Poster,
  rate: movie.imdbRating,
  title: movie.Title,
  year: movie.Year,
}));

const slideClassConfigs = [ClassNames()];

export default function Slider({ slides = slidesData }) {
  const [sliderRef, sliderApi] = useEmblaCarousel({ loop: true }, slideClassConfigs);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(sliderApi);

  return (
    <div className="slider">
      <div className="slider__viewport" ref={sliderRef}>
        <div className="slider__container">
        {slides.map(slide => (
          <SliderItem
            {...slide}
            key={`slide-${slide.title}`}
          />
        ))}
        </div>
      </div>

      <div className="slider__controls">
        <div className="slider__dots">
          {scrollSnaps.map((_, index) => (
            <SliderDot
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'slider__dot'.concat(
                index === selectedIndex ? ' slider__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape(SliderItem.propTypes)
  )
};
