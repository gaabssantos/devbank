import { Spacer, SpecialTitle, Text, Title } from '../../components';
import Button from '../../components/button';
import IncomesExcomes from '../../components/images/incomes-excomes';
import OpenAccountDesign from '../../components/images/open-account-design';
import Warning from '../../components/warning';
import { Container } from './styles';

const OpenAccount = () => {
  return (
    <Container>
      <div>
        <Spacer size={4.375} />
        <Warning />
        <Title>
          Bem-vindo ao DevBank fortalecendo sua{' '}
          <SpecialTitle>jornada financeira</SpecialTitle>
        </Title>
        <Text margin={'0 0 2rem 0'}>
          No DevBank, nossa missão é fornecer soluções bancárias abrangentes que
          capacitem indivíduos e empresas a atingir seus objetivos financeiros.
          Temos o compromisso de fornecer serviços personalizados e inovadores
          que priorizem as necessidades de nossos clientes.
        </Text>
        <Button variant="green">Abrir conta</Button>
      </div>
      <div>
        <IncomesExcomes />
        <OpenAccountDesign />
      </div>
    </Container>
  );
};

export default OpenAccount;
