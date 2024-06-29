import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import AbstractDesign from '../components/Images/AbstractDesign';
import Nav from '../components/Nav';
import { useFetchAPI } from '../hooks/useFetchAPI';
import { Container, MainContainer } from './styles';

const DefaultLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { getBalance, isUserLogged } = useFetchAPI();

  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (!isUserLogged()) {
      navigate('/');
    } else {
      navigate('/account');
    }

    const fetchUserName = async () => {
      setUserName((await getBalance()).name);
    };

    fetchUserName();
  }, [isUserLogged, getBalance, navigate]);

  return (
    <>
      <Container>
        <Nav active={pathname} userName={userName} />
      </Container>
      {pathname === '/' && <AbstractDesign />}
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};

export default DefaultLayout;
