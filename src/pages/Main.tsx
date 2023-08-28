import React, {useState} from 'react';
import OfferList from '../components/OfferList';
import {TOffer} from '../mocks/offers.ts';
import Map from '../components/Map';
import {TCity} from '../types/types.ts';
import Header from '../components/Header';
import CityList from '../components/CityList';
import {useAppSelector} from '../store/hooks.ts';
import Sort from "../components/Sort";

type MainProps = {
  offers: TOffer[];
  city: TCity;
};

const Main: React.FC<MainProps> = ({offers, city,}) => {

  const [selectedOffer, setSelectedOffer] = useState<TOffer | undefined>(
    undefined
  );

  const handleOfferHover = (id: number) => {
    const currentOffer = offers.find((offer) => offer.id === id);
    setSelectedOffer(currentOffer);
  };

  const selectedCity = useAppSelector((state) => state.selectedCity);
  const actualOffers = offers.filter((offer) => offer.city === selectedCity);

  return (
    <div className="page page--gray page--main">
      <Header></Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList></CityList>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{actualOffers.length} places to stay in {selectedCity}</b>
              <Sort></Sort>
              <OfferList offers={actualOffers} onOfferHover={handleOfferHover}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={actualOffers} selectedOffer={selectedOffer} height={794}></Map>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
