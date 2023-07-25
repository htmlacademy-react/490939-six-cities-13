import React from 'react';
import {Link} from 'react-router-dom';


const NotFound: React.FC = () => (
  <div className="not-found">
    <h2>Такой страницы нет 😢</h2>
    <Link to="/" style={{padding: 20}}>
      На главную
    </Link>
  </div>
);
export default NotFound;
