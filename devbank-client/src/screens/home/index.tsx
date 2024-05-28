import AbstractDesign from '../../components/abstract-design';
import Nav from '../../components/nav';
import Warning from '../../components/warning';
import { Container } from './styles';

const Home = () => {
  return (
    <>
      <AbstractDesign />
      <Container>
        <Nav />
        <Warning />
      </Container>
    </>
  );
};

export default Home;
