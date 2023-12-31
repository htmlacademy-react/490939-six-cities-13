import React from 'react';
import {Link} from 'react-router-dom';
import {TOffer} from '../../mocks/offers.ts';


type NearOfferItemProps = {
  offer: TOffer;
  onOfferHover: (id: number) => void;
}
const NearOfferItem: React.FC<NearOfferItemProps> = ({offer, onOfferHover}) => {
  const handleOfferHover = () => {
    onOfferHover(offer.id);
  };

  return (
    <Link
      to="offer/{offer.id}"
    >
      <article className="near-places__card place-card" onMouseEnter={handleOfferHover}>
        <div className="near-places__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src={`img/${offer.images[0]}`}
              width={260}
              height={200}
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{offer.price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button place-card__bookmark-button--active button"
              type="button"
            >
              <svg
                className="place-card__bookmark-icon"
                width={18}
                height={19}
              >
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${20 * offer.rating}%`}}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <span>
              {offer.name}
            </span>
          </h2>
          <p className="place-card__type">{offer.entire}</p>
        </div>
      </article>
    </Link>
  );
};

export default NearOfferItem;
