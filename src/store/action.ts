import {createAction} from '@reduxjs/toolkit';
import {CityName} from './reducer.ts';

export const changeCity = createAction('app/changeCity', (city: CityName) => ({
  payload: city
}));

export const getOffers = createAction('app/getOffers');
