import Link from 'next/link';

import Logo from '../Logo';
import SearchBox from '../SearchBox';
import IconViewGrid from '@icons/ViewGrid';

import './style.css';

const navList = [
  { label: 'Categories', path: '/', icon: <IconViewGrid /> },
  { label: 'Movies', path: '/movies' },
  { label: 'TV Shows', path: '/' },
  { label: 'Login', path: '/' },
];

export default function Header({ logo }) {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__brand">
          {logo || <Link href="/"><Logo /></Link>}
        </div>
        <div className="header__search">
          <SearchBox />
          {/* categories */}
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {navList.map(nav => (
              <li className="header__nav-item" key={`nav-${nav.label}`}>
                <Link className="header__nav-link" href={nav.path}>
                  {nav.icon && (
                    <span className="header__nav-icon">{nav.icon}</span>
                  )}
                  <span className="header__nav-label">{nav.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
