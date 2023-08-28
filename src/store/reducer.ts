import {createReducer} from '@reduxjs/toolkit';
import offers, {TOffer} from '../mocks/offers.ts';
import {changeCity, getOffers} from './action.ts';

enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

const DEFAULT_SELECTED_CITY = CityName.Paris;

type InitialState = {
  selectedCity: CityName;
  offers: TOffer[];
}

const initialState: InitialState = {
  selectedCity: DEFAULT_SELECTED_CITY,
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = offers;
    });
});

export {reducer};
export {CityName};
