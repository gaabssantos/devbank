import CardOpenAccount from '../../components/CardOpenAccount';
import OpenAccount from '../../containers/OpenAccountContainer';
import Products from '../../containers/ProductsContainer';

const Home = () => {
  return (
    <div>
      <OpenAccount />
      <Products />
      <CardOpenAccount />
    </div>
  );
};

export default Home;
