import React from 'react';
import Main from './pages/Main';
// import Favorites from './pages/Favorites';

type AppProps = {
  count: number;
};

const App: React.FC <AppProps> = ({count}) => (
  <Main count={count}></Main>
);

export default App;
