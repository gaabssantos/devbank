/* eslint-disable no-irregular-whitespace */
import { Spacer, SpecialTitle, Text, Title } from '../../components';
import { Container } from './styles';

const Products = () => {
  return (
    <Container>
      <Spacer size={10} />
      <Title>
        Nossos <SpecialTitle>produtos</SpecialTitle>
      </Title>
      <Text>
        Descubra uma gama de produtos bancários abrangentes e personalizáveis
        ​​no YourBank, projetados para atender às suas necessidades e aspirações
        financeiras exclusivas
      </Text>
    </Container>
  );
};

export default Products;
