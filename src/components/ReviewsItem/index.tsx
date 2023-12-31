import React from 'react';
import {TReview} from '../../mocks/offers.ts';


type ReviewsItemProps = {
  review: TReview;
}
const ReviewsItem: React.FC<ReviewsItemProps> = ({review}) => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          src={`img/${review.avatar}`}
          width={54}
          height={54}
          alt="Reviews avatar"
        />
      </div>
      <span className="reviews__user-name">{review.name}</span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${20 * review.rating}%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.text}
      </p>
      <time className="reviews__time" dateTime={review.date}>
        {review.date}
      </time>
    </div>
  </li>
);

export default ReviewsItem;
