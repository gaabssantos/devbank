import responsive from '../../assets/responsive-bar.svg';
import Button from '../Button';

interface ResponsiveBarProps {
  onClick: () => void;
}

const ResponsiveBar = ({ onClick }: ResponsiveBarProps) => {
  return (
    <Button variant="green" onClick={onClick}>
      <img src={responsive} alt="barra-responsiva" />
    </Button>
  );
};

export default ResponsiveBar;
