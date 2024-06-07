import AbstractDesign from '../../components/Images/AbstractDesign';
import OpenAccount from '../../containers/OpenAccountContainer';
import Products from '../../containers/ProductsContainer';
import { Container } from './styles';

const Home = () => {
  return (
    <>
      <AbstractDesign />
      <Container>
        <OpenAccount />
        <Products />
      </Container>
    </>
  );
};

export default Home;
