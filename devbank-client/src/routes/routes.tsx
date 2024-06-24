import { Routes, Route } from 'react-router-dom';

import DefaultLayout from '../layouts/Layout';
import Home from '../screens/Home';

const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
