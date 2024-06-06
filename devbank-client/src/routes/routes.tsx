import { Routes, Route } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
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
