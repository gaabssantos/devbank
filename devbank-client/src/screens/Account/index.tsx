import { useEffect, useState } from 'react';
import { FaMoneyBillTransfer } from 'react-icons/fa6';

import Button from '../../components/Button';
import { useFetchAPI } from '../../hooks/useFetchAPI';
import { Balance } from '../../services/api-types';
import numberFormat from '../../utils/numberFormat';
import { Activities, Activity, Card, Container, Transfer } from './styles';

const Account = () => {
  const [user, setUser] = useState<Balance>({
    name: '',
    email: '',
    balance: 0,
  });

  const { getBalance } = useFetchAPI();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getBalance();

      setUser(data);
    };

    fetchUser();
  }, [getBalance]);

  return (
    <Container>
      <Card>
        <h2>Olá, {user.name}!</h2>
        <span>Dinheiro disponível</span>
        <p>{numberFormat(user.balance)}</p>
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
