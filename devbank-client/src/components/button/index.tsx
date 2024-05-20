import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
  variant: 'green' | 'none';
}

const Button = ({ children, variant }: ButtonProps) => {
  return <Container variant={variant}>{children}</Container>;
};

export default Button;
