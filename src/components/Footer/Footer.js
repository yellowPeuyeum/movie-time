import Logo from '../Logo';
import './style.css';

const siteName = 'MoovieTime';
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__module footer__copyright">
          ©  {year} {siteName}. All rights reserved.
        </div>
        <div className="footer__module footer__brand">
          <Logo color="currentColor" />
        </div>
        <div className="footer__module footer__tribute">
          Made with{' '}
          <a
            className="inline-flex items-center ml-1 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJS
          </a>
        </div>
      </div>
    </div>
  );
}