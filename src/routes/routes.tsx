import { Routes, Route } from 'react-router-dom';

import { NotFound, Home, Login } from '@pages/index';
import PrivateRoute from '@components/PrivateRoute';

const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<PrivateRoute component={<Home />} />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesProvider;
