'use client'
import { useState } from 'react';

export default function FilterCheckbox({ label }) {
  const [checked, setChecked] = useState(false);

  function handleChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <li className="filter-genre__item">
      <label className="filter-genre__control">
        <span className="filter-genre__checkbox">
          <input
            className="filter-genre__input"
            name="genres"
            type="checkbox"
            onChange={handleChange}
            checked={checked}
          />
        </span>
        <span className="filter-genre__label">{label}</span>
      </label>
    </li>
  );
}
