import { ReactNode } from 'react';

import { Text, TitleSmall } from '..';

import { Container, IconContainer } from './styles';

type ProductsCardProps = {
  title: string;
  image: string;
  children: ReactNode;
};

const ProductsCard = ({ title, image, children }: ProductsCardProps) => {
  return (
    <Container>
      <IconContainer>
        <img src={image} alt="ícone-produtos" />
      </IconContainer>
      <TitleSmall>{title}</TitleSmall>
      <Text>{children}</Text>
    </Container>
  );
};

export default ProductsCard;
