import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { SpecialTitle, Text, Title } from '../../components';
import Button from '../../components/Button';
import SignupDesign from '../../components/Images/SignupDesign';
import { Actions, Container, Form } from './styles';

type Inputs = {
  example: string;
  exampleRequired: string;
};

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Container>
      <SignupDesign />
      <Title>
        <SpecialTitle>Cadastro</SpecialTitle>
        <Text>
          Junte-se à nossa comunidade hoje! Crie uma conta para desbloquear
          recursos exclusivos e experiências personalizadas.
        </Text>
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Digite seu nome" />
        <input type="text" placeholder="Digite seu sobrenome" />
        <input type="email" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />
      </Form>
      <Actions>
        <Button variant="green">Cadastrar</Button>
        <Button variant="none" id="login">
          Logar
        </Button>
      </Actions>
    </Container>
  );
};

export default SignUp;
