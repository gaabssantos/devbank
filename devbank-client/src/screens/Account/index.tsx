import { FaMoneyBillTransfer } from 'react-icons/fa6';

import Button from '../../components/Button';
import { Activities, Activity, Card, Container, Transfer } from './styles';

const Account = () => {
  return (
    <Container>
      <Card>
        <h2>Olá, Usuário!</h2>
        <span>Dinheiro disponível</span>
        <p>R$ 0,00</p>
        <Transfer>
          <Button variant="green">Transferir agora</Button>
        </Transfer>
      </Card>
      <Activities>
        <h2>Sua atividade</h2>
        <Activity>
          <FaMoneyBillTransfer />
          <p>Transferência feita para Usuário</p>
          <p>-R$ 180</p>
        </Activity>
      </Activities>
    </Container>
  );
};

export default Account;
