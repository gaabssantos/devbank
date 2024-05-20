import responsive from '../../assets/responsive-bar.svg';
import Button from '../button';

const ResponsiveBar = () => {
  return (
    <Button variant="green">
      <img src={responsive} alt="barra-responsiva" />
    </Button>
  );
};

export default ResponsiveBar;
