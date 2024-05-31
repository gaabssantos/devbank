import styled from 'styled-components';

import themes from '../../styles/themes.json';

interface ButtonProps {
  variant: string;
}

export const Container = styled.button<ButtonProps>`
  background: none;
  border: none;
  color: ${(props) =>
    props.variant === 'green'
      ? `${themes.shades.gray.variant2}`
      : `${themes.absolutes.white}`};
  background-color: ${(props) =>
    props.variant === 'green' && `${themes.primary.variant1}`};
  padding: ${(props) => props.variant === 'green' && '0.875rem 1.875rem'};
  border-radius: 3.125rem;
  cursor: pointer;
  margin-right: 1.875rem;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    display: block;
    margin: 0 auto;
  }
`;
