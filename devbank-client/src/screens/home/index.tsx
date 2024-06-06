import AbstractDesign from '../../components/images/abstract-design';
import OpenAccount from '../../containers/OpenAccountContainer';
import { Container } from './styles';

const Home = () => {
  return (
    <>
      <AbstractDesign />
      <Container>
        <OpenAccount />
      </Container>
    </>
  );
};

export default Home;
