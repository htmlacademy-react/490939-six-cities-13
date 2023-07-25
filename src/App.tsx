import React from 'react';
import Main from './pages/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Offer from './pages/Offer';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';


type AppProps = {
  count: number;
};


const App: React.FC <AppProps> = ({count}) => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main count={count} />} />
      <Route
        path='favorites'
        element={
          <PrivateRoute isAuthorizedUser={false}>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path='login' element={<Login />} />
      <Route path='offer/:id' element={<Offer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
