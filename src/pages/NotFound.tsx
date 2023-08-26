import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';


const NotFound: React.FC = () => (
  <div className="page">
    <Header></Header>
    <main className="page__main page__main--not-found">
      <div className="not-found">
        <h2>Такой страницы нет 😢</h2>
        <Link to="/" style={{padding: 20}}>
          На главную
        </Link>
      </div>
    </main>
  </div>
);
export default NotFound;
