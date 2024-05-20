import AbstractDesign from '../../components/abstract-design';
import Nav from '../../components/nav';
import { Container } from './styles';

const Home = () => {
  return (
    <>
      <AbstractDesign />
      <Container>
        <Nav />
      </Container>
    </>
  );
};

export default Home;
