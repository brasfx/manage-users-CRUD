import { getAllUsers } from '@services/api';
import { FC, useState, useEffect, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: ReactElement;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('login') ?? false,
  );

  useEffect(() => {
    localStorage.getItem('login')
      ? setIsAuthenticated(true)
      : setIsAuthenticated(false);
  }, [localStorage.getItem('login')]);

  return isAuthenticated ? Component : <Navigate to="/login" replace />;
};
export default PrivateRoute;
