import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import AbstractDesign from '../components/Images/AbstractDesign';
import Nav from '../components/Nav';
import { useFetchAPI } from '../hooks/useFetchAPI';
import { Container, MainContainer } from './styles';

const DefaultLayout = () => {
  const { pathname } = useLocation();

  const { getBalance } = useFetchAPI();

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      setUserName((await getBalance()).name);
    };

    fetchUserName();
  });

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
