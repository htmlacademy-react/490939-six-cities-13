import React from 'react';
import {TReview} from '../../mocks/offers.ts';
import ReviewsItem from "../ReviewsItem";


type ReviewsListProps = {
  reviews: TReview[];
}
const ReviewsList: React.FC<ReviewsListProps> = ({reviews,}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
};

export default ReviewsList;
