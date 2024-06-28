import { Routes, Route } from 'react-router-dom';

import DefaultLayout from '../layouts/Layout';
import Account from '../screens/Account';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<SignUp />} />
        <Route path="/logar" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
};

export default Router;
