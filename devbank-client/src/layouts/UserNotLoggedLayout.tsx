import { Outlet } from 'react-router-dom';

import Nav from '../components/Nav';
import { Container } from './styles';

const DefaultLayout = () => {
  return (
    <>
      <Container>
        <Nav />
      </Container>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
