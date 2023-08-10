import React from 'react';
import Main from './pages/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Offer from './pages/Offer';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import {offerData} from './mocks/offers.ts';
import Layout from './components/Layout';


type AppProps = {
  offers: offerData[];
};

const App: React.FC <AppProps> = ({ offers}) => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main offers={offers} />} />
        <Route
          path='favorites'
          element={
            <PrivateRoute isAuthorizedUser>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path='login' element={<Login />} />
        <Route path='offer/:id' element={<Offer offer={offers[1]} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
