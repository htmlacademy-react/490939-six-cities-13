import React from 'react';
import Card from '../Card';
import {TOffer} from '../../mocks/offers.ts';

type OfferListProps = {
  offers: TOffer[];
  onOfferHover: (id: number) => void;
}

const OfferList: React.FC<OfferListProps> = ({offers, onOfferHover}) => {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onOfferHover={onOfferHover}
        />
      ))}
    </div>
  );
};

export default OfferList;

