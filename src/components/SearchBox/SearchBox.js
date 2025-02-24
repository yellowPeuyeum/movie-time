'use client'
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import IconMovie from '@icons/Movie';
import IconSearch from '@icons/Search';

import './style.css';

export default function SearchBox() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  const [search, setSearch] = useState(q || '');

  function handleSearch(e) {
    if (e.key === 'Enter') push(`/movies?q=${e.target.value}`);
  }

  useEffect(() => setSearch(q || ''), [q])

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
        onKeyDown={handleSearch}
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