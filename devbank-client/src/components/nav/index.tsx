import Button from '../button';
import ResponsiveBar from '../responsive-bar';
import {
  Container,
  Item,
  Items,
  Logo,
  Responsive,
  ResponsiveHidden,
  Title,
} from './styles';

import logo from '/logo.png';

const Nav = () => {
  return (
    <Container>
      <Logo>
        <div>
          <img src={logo} alt="logo-devbank" />
        </div>
        <Title>DevBank</Title>
      </Logo>
      <ResponsiveHidden>
        <Items>
          <Item active>Home</Item>
          <Item>Carreiras</Item>
          <Item>Sobre</Item>
          <Item>Segurança</Item>
        </Items>
      </ResponsiveHidden>
      <ResponsiveHidden>
        <Button variant="none">Cadastrar</Button>
        <Button variant="green">Logar</Button>
      </ResponsiveHidden>
      <Responsive>
        <ResponsiveBar />
      </Responsive>
    </Container>
  );
};

export default Nav;
