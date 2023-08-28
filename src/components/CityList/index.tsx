import React from 'react';
import {useDispatch} from 'react-redux';
import {CityName} from '../../store/reducer.ts';
import {changeCity} from '../../store/action.ts';
import {useAppSelector} from '../../store/hooks.ts';

const CityList: React.FC = () => {
  const cities = Object.values(CityName);
  const dispatch = useDispatch();
  const selectedCity = useAppSelector((state) => state.selectedCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={selectedCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
                href="#"
                onClick={() => dispatch(changeCity(city))}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CityList;
