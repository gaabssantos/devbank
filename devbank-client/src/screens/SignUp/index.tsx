import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as z from 'zod';

import {
  ErrorMessage,
  ErrorText,
  SpecialTitle,
  Text,
  Title,
} from '../../components';
import Button from '../../components/Button';
import SignupDesign from '../../components/Images/SignupDesign';
import { useFetchAPI } from '../../hooks/useFetchAPI';
import { CreateUserData } from '../../validators/types';
import { Actions, Container, Form, InputControl } from './styles';

import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: 'O nome é preciso ter, pelo menos, 2 caracteres.' }),
    lastName: z.string().trim().min(1, {
      message: 'O sobrenome é preciso ter, pelo menos, 2 caracteres.',
    }),
    email: z.string().email({ message: 'Este e-mail está inválido.' }),
    password: z
      .string()
      .trim()
      .min(8, { message: 'A senha é preciso ter, pelo menos, 8 caracteres' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const { createUser } = useFetchAPI();

  const onSubmit: SubmitHandler<Inputs> = async (data: CreateUserData) => {
    try {
      await createUser(data);
      toast.success('Usuário cadastrado com sucesso!');
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.status === 401) {
        toast.error('Este e-mail já existe, tente usar outro.');
      }
    }
  };

  return (
    <Container>
      <SignupDesign />
      {(errors.email?.message ||
        errors.lastName?.message ||
        errors.name?.message ||
        errors.password?.message) && (
        <ErrorMessage>
          <p>Por favor, corrija os erros antes de continuar.</p>
        </ErrorMessage>
      )}

      <Title>
        <SpecialTitle>Cadastro</SpecialTitle>
        <Text>
          Junte-se à nossa comunidade hoje! Crie uma conta para desbloquear
          recursos exclusivos e experiências personalizadas.
        </Text>
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputControl>
          <div>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register('name')}
            />
            {errors.name?.message && (
              <ErrorText>{errors.name?.message}</ErrorText>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Digite seu sobrenome"
              {...register('lastName')}
            />
            {errors.lastName?.message && (
              <ErrorText>{errors.lastName?.message}</ErrorText>
            )}
          </div>
        </InputControl>
        <InputControl>
          <div>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register('email')}
            />
            {errors.email?.message && (
              <ErrorText>{errors.email?.message}</ErrorText>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register('password')}
            />
            {errors.password?.message && (
              <ErrorText>{errors.password?.message}</ErrorText>
            )}
          </div>
        </InputControl>
        <Actions>
          <Button variant="green">Cadastrar</Button>
          <Link to={'/logar'}>
            <Button variant="none" id="login">
              Logar
            </Button>
          </Link>
        </Actions>
      </Form>
    </Container>
  );
};

export default SignUp;
