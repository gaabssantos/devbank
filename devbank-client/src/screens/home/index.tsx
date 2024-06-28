import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CardOpenAccount from '../../components/CardOpenAccount';
import OpenAccount from '../../containers/OpenAccountContainer';
import Products from '../../containers/ProductsContainer';
import { useFetchAPI } from '../../hooks/useFetchAPI';

const Home = () => {
  const { isUserLogged } = useFetchAPI();
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLogged()) {
      navigate('/account');
    }
  });

  return (
    <div>
      <OpenAccount />
      <Products />
      <CardOpenAccount />
    </div>
  );
};

export default Home;
