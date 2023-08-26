import React from 'react';
import Main from './pages/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Offer from './pages/Offer';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import {TOffer} from './mocks/offers.ts';
import {CITY} from './mocks/city.ts';


type TAppProps = {
  offers: TOffer[];
};

const App: React.FC<TAppProps> = ({offers}) => (
  <BrowserRouter>
    <Routes>
      {/*<Route path='/' element={<Header />}>*/}
      <Route index element={<Main offers={offers} city={CITY}/>}/>
      <Route
        path='favorites'
        element={
          <PrivateRoute isAuthorizedUser>
            <Favorites offers={offers}/>
          </PrivateRoute>
        }
      />
      <Route path='login' element={<Login/>}/>
      <Route path='offer/:id' element={<Offer offer={offers[1]} offers={offers} city={CITY}/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
