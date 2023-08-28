import React, {useState} from 'react';
import OfferList from '../components/OfferList';
import {TOffer} from '../mocks/offers.ts';
import Map from '../components/Map';
import {TCity} from '../types/types.ts';
import Header from '../components/Header';
import CityList from '../components/CityList';
import {useAppSelector} from '../store/hooks.ts';

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>Popular</span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
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
