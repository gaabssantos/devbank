import CheckMark from '../../assets/check-mark.svg';
import { Container } from './styles';

const Warning = () => {
  return (
    <Container>
      <img src={CheckMark} alt="Check mark" />
      <p>Não é necessário de LLC e sem cartão de crédito.</p>
    </Container>
  );
};

export default Warning;
