import { Text } from '..';

import CheckMark from '../../assets/check-mark.svg';
import { Container } from './styles';

const Warning = () => {
  return (
    <Container>
      <img src={CheckMark} alt="Check mark" />
      <Text>Não é necessário de LLC e sem cartão de crédito.</Text>
    </Container>
  );
};

export default Warning;
