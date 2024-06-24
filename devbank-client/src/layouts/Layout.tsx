import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Container } from './styles';

const DefaultLayout = () => {
  return (
    <>
      <Container>
        <Nav />
      </Container>
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
