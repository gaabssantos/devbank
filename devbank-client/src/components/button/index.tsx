import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
  variant: 'green' | 'none';
  onClick?: () => void;
}

const Button = ({ children, variant, onClick }: ButtonProps) => {
  return (
    <Container variant={variant} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
