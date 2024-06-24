import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';

import { Container, Item } from './styles';

export const CardContact = () => {
  return (
    <Container>
      <Item>
        <IoMdMail />
        <p>gabriel.oliveira2040@hotmail.com</p>
      </Item>
      <Item>
        <FaPhoneAlt />
        <p>(11) 99011-5235</p>
      </Item>
      <Item>
        <IoLocationSharp />
        <p>Santo André - SP</p>
      </Item>
    </Container>
  );
};

export default CardContact;
