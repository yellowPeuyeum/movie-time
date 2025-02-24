import PropTypes from 'prop-types';
import Image from 'next/image';
import './style.css';

export default function Banner({ alt, img }) {
  return (
    <div className="banner">
      <Image
        className="banner__img"
        src={img}
        alt={alt}
        width={1560}
        height={360}
      />
    </div>
  );
}

Banner.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.string,
};

