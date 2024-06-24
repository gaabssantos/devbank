import CardContact from '../CardContact';
import { Container, FooterContainer, Logo } from './styles';

import logo from '/logo.png';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Logo>
          <div>
            <img src={logo} alt="logo-devbank" />
          </div>
          <h2>DevBank</h2>
        </Logo>
        <ul>
          <li>Home</li>
          <li>Carreiras</li>
          <li>Sobre</li>
          <li>Segurança</li>
        </ul>
        <CardContact />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
