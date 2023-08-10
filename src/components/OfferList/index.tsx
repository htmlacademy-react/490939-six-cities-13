import React from 'react';
import Card from '../Card';
import {offerData} from '../../mocks/offers.ts';

type OfferListProps = {
  offers: offerData[];
}

const OfferList: React.FC<OfferListProps> = ({offers}) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <Card key={offer.id} offer={offer} />
    ))}
  </div>
);

export default OfferList;

