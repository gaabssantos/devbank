import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import AbstractDesign from '../components/Images/AbstractDesign';
import Nav from '../components/Nav';
import { Container, MainContainer } from './styles';

const DefaultLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Container>
        <Nav active={pathname} />
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
