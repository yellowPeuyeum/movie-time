'use client'
import { useState } from 'react';

import IconMovie from '@icons/Movie';
import IconSearch from '@icons/Search';

import './style.css';

export default function SearchBox() {
  const [search, setSearch] = useState('');

  return (
    <div className="search-box">
      <div className="input-adornment--start">
        <IconMovie />
      </div>
      <input
        className="input search-box__input"
        type="text"
        aria-label="find movie"
        placeholder="Find movie"
        // onKeyDown={handleSearch}
        onChange={(e) => setSearch(e.target.value)}
        name="q"
        value={search}
      />
      <div className="input-adornment--end">
        <IconSearch />
      </div>
    </div>
  );
}