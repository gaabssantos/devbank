import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Modal } from '@mui/material';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { ErrorText, Form, Loading } from '../../components';
import Button from '../../components/Button';
import { useFetchAPI } from '../../hooks/useFetchAPI';
import { Balance } from '../../services/api-types';
import themes from '../../styles/themes.json';
import numberFormat from '../../utils/numberFormat';
import { TransferData } from '../../validators/types';
import {
  Activities,
  Activity,
  ActivityEmpty,
  Card,
  Container,
  CurrencyInput,
  Transfer,
} from './styles';

type Inputs = {
  email: string;
  value: string;
};

const Account = () => {
  const { createTransfer, getBalance } = useFetchAPI();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<Balance>({
    name: '',
    email: '',
    balance: 0,
    activities: [{ id: '', name: '', value: 0 }],
  });

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    backgroundColor: themes.shades.gray.variant1,
    color: '#ffffff',
    textAlign: 'center',

    button: {
      width: '100%',
      marginTop: '1rem',
    },

    input: {
      margin: '1rem 0',
    },
  };

  const schema = z.object({
    email: z.string().email({ message: 'Este e-mail está inválido.' }),
    value: z
      .string()
      .min(1, { message: 'Deve conter pelo menos 1 dígito' })
      .max(255),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit: SubmitHandler<Inputs> = async (data: TransferData) => {
    try {
      await createTransfer(data);
      const userData = await getBalance();
      setUser(userData);
      toast.success('Transferência concluida com sucesso.');
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data.errorText === 'transfer_yourself') {
          toast.error('Você não pode transferir para você mesmo.');
        } else if (error.response?.data.errorText === 'email_not_exists') {
          toast.error('Este e-mail não existe.');
        } else if (
          error.response?.data.errorText === 'balance_less_than_value'
        ) {
          toast.error(
            'O seu saldo é menor do que o valor que você quer transferir.',
          );
        }
      }
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getBalance();

      setUser(data);
    };

    fetchUser();
  }, [getBalance, navigate]);

  return (
    <Container>
      <Card>
        {user.name ? <h2>Olá, {user.name}!</h2> : <Loading />}
        <span>Dinheiro disponível</span>
        <p>{numberFormat(user.balance)}</p>
        <Transfer>
          <Button variant="green" onClick={handleOpen}>
            Transferir agora
          </Button>
        </Transfer>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2>Transferência</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Digite o e-mail"
                {...register('email')}
              />
              <ErrorText>{errors.email?.message}</ErrorText>
              <CurrencyInput
                placeholder="R$  0,00"
                format="currency"
                currency="BRL"
                {...register('value')}
                error={errors.value?.message}
              />
              <ErrorText>{errors.value?.message}</ErrorText>
              <Button variant="green">Enviar</Button>
            </Form>
          </Box>
        </Modal>
      </Card>
      <Activities>
        <h2>Sua atividade</h2>
        {user.activities && user.activities.length > 0 ? (
          user.activities.map((activity) => {
            if (activity.name) {
              return (
                <Activity key={activity.id}>
                  <FaMoneyBillTransfer />
                  <p>Transferência feita para {activity.name}</p>
                  <p>-{numberFormat(activity.value)}</p>
                </Activity>
              );
            } else {
              return <Loading />;
            }
          })
        ) : (
          <ActivityEmpty>
            Ainda você não possui nenhuma atividade.
          </ActivityEmpty>
        )}
      </Activities>
    </Container>
  );
};

export default Account;
