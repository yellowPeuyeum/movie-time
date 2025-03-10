import FilterCheckbox from './FilterCheckbox';
import './style.css';

const sortOptions = [
  { label: 'Popularity', value: '' },
  { label: 'Popularity Ascending', value: 'popular' },
  { label: 'Popularity Descending', value: '-popular' },
  { label: 'Release Date Ascending', value: 'release' },
  { label: 'Release Date Descending', value: '-release' },
  { label: 'Rating Ascending', value: 'rate' },
  { label: 'Rating Descending', value: '-rate' },
];

const genreOptions = [
  { label: 'Action' },
  { label: 'Adventure' },
  { label: 'Animation' },
  { label: 'Comedy' },
  { label: 'Crime' },
  { label: 'Documentary' },
  { label: 'Drama' },
  { label: 'Family' },
  { label: 'Fantasy' },
  { label: 'History' },
  { label: 'Horror' },
];

export default function Filter() {
  return (
    <div className="filters">
      <div className="filter__module">
        <span className="filter-title">Sort Result By</span>
      </div>
      <div className="filter__module">
        <div className="filter-sort">
          <select className="filter-sort__options" name="sort">
            {sortOptions.map(option => (
              <option
                key={`sort-option-${option.value}`}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="filter__module">
        <span className="filter-title">Genres</span>
      </div>
      <div className="filter__module">
        <div className="filter-genre">
          <ul className="filter-genre__list">
            {genreOptions.map(option => (
              <FilterCheckbox
                {...option}
                key={`checkbox-genre-${option.label}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
