import AbstractDesign from '../../components/images/abstract-design';
import Nav from '../../components/Nav';
import OpenAccount from '../../containers/OpenAccountContainer';
import { Container } from './styles';

const Home = () => {
  return (
    <>
      <AbstractDesign />
      <Container>
        <Nav />
        <OpenAccount />
      </Container>
    </>
  );
};

export default Home;
