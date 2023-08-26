import React, {useState} from 'react';
import {TOffer} from '../mocks/offers.ts';
import Reviews from '../components/Reviews';
import Header from '../components/Header';
import Map from '../components/Map';
import {TCity} from '../types/types.ts';
import NearOfferList from '../components/NearOfferList';

type OfferProps = {
  offer: TOffer;
  offers: TOffer[];
  city: TCity;
};


const Offer: React.FC<OfferProps> = ({offer, offers, city}) => {
  const [selectedOffer, setSelectedOffer] = useState<TOffer | undefined>(
    undefined
  );

  const nearOffers = offers.filter((x) => x !== offer);

  const handleOfferHover = (id: number) => {
    const currentOffer = nearOffers.find((x) => x.id === id);
    setSelectedOffer(currentOffer);
  };
  return (
    <div className="page">
      <Header></Header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((url) => (
                <div key={url} className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src={`img/${url}`}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>{offer.class}</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.name}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${20 * offer.rating}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.entire}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.adults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">{offer.currency}{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.inside.map((x) => (
                    <li key={x} className="offer__inside-item">{x}</li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={`img/${offer.hostAvatar}`}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.hostName}</span>
                  <span className="offer__user-status">{offer.hostStatus}</span>
                </div>
                <div className="offer__description">
                  {offer.text.map((x) => (
                    <p key={offer.id} className="offer__text">{x}</p>
                  ))}
                </div>
              </div>
              <Reviews reviews={offer.reviews}></Reviews>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={city} offers={nearOffers} selectedOffer={selectedOffer} height={579}></Map>
          </section>
        </section>
        <NearOfferList offers={nearOffers} onOfferHover={handleOfferHover}></NearOfferList>
      </main>
    </div>
  );
};

export default Offer;
