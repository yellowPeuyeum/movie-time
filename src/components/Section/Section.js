import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

export default function Section({
  backdrop = false,
  children,
  className,
  moduleContent,
  title,
  titleAccent = false,
  titleSize = 'md',
  ...rest
}) {
  const rootClass = classNames({
    section: true,
    [className]: className
  });

  const titleClass = classNames({
    'section__title': true,
    'section__title--accent': titleAccent,
    'section__title--lg': titleSize === 'lg',
  });

  return (
    <section className={rootClass}>
      {backdrop && <div className="section__backdrop" />}
      <div className="section__container">
        {title && (
          <div className="section__header">
            <h2 className={titleClass}>{title}</h2>
            <div className="section__module">{moduleContent}</div>
          </div>
        )}
        <div className="section__body">
          {children}
        </div>
      </div>
    </section>
  );
}

Section.propTypes = {
  backdrop: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  moduleContent: PropTypes.node,
  title: PropTypes.node,
  titleAccent: PropTypes.bool,
  titleSize: PropTypes.oneOfType(['md', 'lg']),
};
