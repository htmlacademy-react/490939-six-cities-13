import React from 'react';
import Card from '../Card';
import {TOffer} from '../../mocks/offers.ts';

type OfferListProps = {
  offers: TOffer[];
  onOfferHover: (id: number) => void;
}

const NearOfferList: React.FC<OfferListProps> = ({offers, onOfferHover}) => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            onOfferHover={onOfferHover}
          />
        ))}
      </div>
    </section>
  </div>
);

export default NearOfferList;

