import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
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
import { Actions, Container, Form, InputControl } from './styles';

type Inputs = {
  email: string;
  password: string;
};

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = z.object({
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

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Container>
      <SignupDesign />
      {(errors.email?.message || errors.password?.message) && (
        <ErrorMessage>
          <p>Por favor, corrija os erros antes de continuar.</p>
        </ErrorMessage>
      )}

      <Title>
        <SpecialTitle>Login</SpecialTitle>
        <Text>
          Bem-vindo de volta! Por favor, logue para acessar sua conta.
        </Text>
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputControl>
          <div>
            <input
              type="text"
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
          <Button variant="green">Logar</Button>
          <Button variant="none" id="login">
            <Link to={'/cadastrar'}>Cadastrar</Link>
          </Button>
        </Actions>
      </Form>
    </Container>
  );
};

export default SignUp;
