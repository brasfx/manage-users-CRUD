import { BrowserRouter } from 'react-router-dom';

import RoutesProvider from '@routes/routes';

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesProvider />
    </BrowserRouter>
  );
};

export default Routes;
