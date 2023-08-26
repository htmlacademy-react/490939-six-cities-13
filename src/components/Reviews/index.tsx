import React from 'react';
import CommentForm from '../CommentForm';
import {TReview} from '../../mocks/offers.ts';
import ReviewsList from '../ReviewsList';

type ReviewsProps = {
  reviews: TReview[];
};
const Reviews: React.FC<ReviewsProps> = ({reviews}) => {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewsList reviews={reviews}></ReviewsList>
      <CommentForm/>
    </section>
  );
};

export default Reviews;
