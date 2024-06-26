import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
  variant: 'green' | 'none';
  onClick?: () => void;
  id?: string;
}

const Button = ({ children, variant, onClick, id }: ButtonProps) => {
  return (
    <Container $variant={variant} onClick={onClick} id={id} type="submit">
      {children}
    </Container>
  );
};

export default Button;
