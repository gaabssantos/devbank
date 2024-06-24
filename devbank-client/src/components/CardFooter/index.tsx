import { CircleContact, Flex } from '..';

import { Container } from './styles';

import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const CardFooter = () => {
  return (
    <Container>
      <Flex gap={1}>
        <a href="https://www.instagram.com/gaabssantos._/" target="_blank">
          <CircleContact>
            <AiFillInstagram />
          </CircleContact>
        </a>
        <a href="https://www.linkedin.com/in/gaabssantos/" target="_blank">
          <CircleContact>
            <FaLinkedin />
          </CircleContact>
        </a>
      </Flex>
      <p>DevBank todos os direitos reservados</p>
      <p>Política de privacidade | Termos de serviço</p>
    </Container>
  );
};

export default CardFooter;
