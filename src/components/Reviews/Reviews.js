import PropTypes from 'prop-types';
import { format } from 'date-fns';
import classNames from 'classnames';

import IconPerson from '@icons/Person';

import './style.css';

export default function Reviews({
  data: reviews = [],
  spacing = 4,
}) {
  const rootClass = classNames({
    'reviews grid md:grid-cols-2': true,
    'gap-4': spacing === 4,
    'gap-6': spacing === 6,
    'gap-8': spacing === 8,
  });

  return (
    <div className={rootClass}>
      {reviews.map((review, index) => (
        <div className="review" key={String(`review-${index + 1}`)}>
          <div className="review__header">
            <div className="review__avatar">
              <IconPerson />
            </div>
            <div className="review__title">
              <div className="review__name">{review.name}</div>
              {review.date && (
                <div className="review__date">
                  {format(review.date, 'MMMM dd, yyyy')}
                </div>
              )}
            </div>
            <div className="review__rate">
              <span className="review__rate-icon">⭐️</span>
              <span className="review__rate-value">{review.rate}</span>
            </div>
          </div>
          <div className="review__body">{review.content}</div>
        </div>
      ))}
    </div>
  );
}

Reviews.propTypes = {
  data: PropTypes.array,
  spacing: PropTypes.number,
};
