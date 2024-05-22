import { Container, Item, Items } from './styles';

const ResponsiveMenu = () => {
  return (
    <Container>
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
