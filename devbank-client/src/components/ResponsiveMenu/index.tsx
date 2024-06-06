import { Container, Item, Items } from './styles';

type ResponsiveMenuProps = {
  active: boolean;
};

const ResponsiveMenu = ({ active }: ResponsiveMenuProps) => {
  return (
    <Container active={active}>
      <Items>
        <Item active>Home</Item>
        <Item>Carreiras</Item>
        <Item>Sobre</Item>
        <Item>Segurança</Item>
      </Items>
    </Container>
  );
};

export default ResponsiveMenu;
