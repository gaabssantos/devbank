import AbstractDesign from '../../components/images/abstract-design';
import Nav from '../../components/nav';
import OpenAccount from '../../containers/open-account-container';
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
