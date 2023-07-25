import React from 'react';
import {Navigate} from 'react-router-dom';

export type PrivateProps = {
  isAuthorizedUser: boolean;
  children: React.ReactElement;
};

const PrivateRoute: React.FC<PrivateProps> = ({isAuthorizedUser, children}) => isAuthorizedUser ? children :
  <Navigate to={'/login'}/>;

export default PrivateRoute;
