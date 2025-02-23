import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export default function Button({
  children,
  variant = 'primary',
  ...rest
}) {
  const btnClass = classNames({
    btn: true,
    'btn-primary': variant === 'primary'
  })

  return (
    <button className={btnClass} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['normal', 'primary'])
};
