import { useState } from 'react';

import checking from '../../assets/icons/products/checking.svg';
import loans from '../../assets/icons/products/loans.svg';
import saving from '../../assets/icons/products/saving.svg';
import {
  Divider,
  Flex,
  Spacer,
  SpecialTitle,
  Text,
  Title,
} from '../../components';
import Button from '../../components/Button';
import ProductsCard from '../../components/ProductsCard';
import { Container, Select } from './styles';

const Products = () => {
  const [isBusinesses, setIsBusinesses] = useState(false);

  return (
    <Container>
      <Spacer size={7} />
      <Title>
        Nossos <SpecialTitle>produtos</SpecialTitle>
      </Title>
      <Flex justify="space-between" align="center" wrap>
        <Text id="description">
          Descubra uma gama de produtos bancários abrangentes e personaliáveis
          no DevBank, projetados para atender às suas necessidades e aspirações
          financeiras exclusivas
        </Text>
        <Select>
          <Button
            variant={!isBusinesses ? 'green' : 'none'}
            onClick={() => setIsBusinesses(false)}
          >
            Para individuais
          </Button>
          <Button
            variant={isBusinesses ? 'green' : 'none'}
            onClick={() => setIsBusinesses(true)}
          >
            Para empresas
          </Button>
        </Select>
      </Flex>
      <Flex justify="center" wrap>
        <ProductsCard title={'Checando contas'} image={checking}>
          Aproveite o acesso fácil e conveniente aos seus fundos com nossa
          variedade de opções de conta corrente. Beneficie-se de recursos como
          serviços bancários on-line e móveis, cartões de débito e acesso
          gratuito a caixas eletrônicos.
        </ProductsCard>
        <Divider />
        <ProductsCard title={'Salvando contas'} image={saving}>
          Aumente suas economias com nossas taxas de juros competitivas e opções
          flexíveis de contas poupança. Esteja você economizando para uma meta
          específica ou queira aumentar seu patrimônio ao longo do tempo, temos
          a conta certa para você.
        </ProductsCard>
        <Divider />
        <ProductsCard title={'Empréstimos e hipotecas'} image={loans}>
          Realize seus sonhos com nossas opções flexíveis de empréstimos e
          hipotecas. De empréstimos pessoais a hipotecas residenciais, nossos
          experientes agentes de crédito estão aqui para orientá-lo durante o
          processo de inscrição e ajudá-lo a garantir os fundos necessários.
        </ProductsCard>
      </Flex>
    </Container>
  );
};

export default Products;
