import styled from 'styled-components';

import { absolutes, primary } from '../styles/themes.json';

type SpacerProps = {
  size?: number;
};

type TextProps = {
  margin?: string;
};

export const Title = styled.h2`
  color: ${absolutes.white};
  font-size: 40px;
  font-weight: 500;
  line-height: 150%;
  width: 40rem;

  @media (max-width: 600px) {
    width: 25rem;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    width: 30rem;
  }
`;

export const SpecialTitle = styled.span`
  color: ${primary.variant1};
`;

export const Text = styled.p<TextProps>`
  color: ${absolutes.white};
  font-size: 15px;
  font-weight: 300;
  line-height: 24px;
  width: 40rem;
  margin: ${(props) => (props.margin ? props.margin : 0)};

  @media (max-width: 600px) {
    width: 25rem;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    width: 30rem;
  }
`;

export const Spacer = styled.div<SpacerProps>`
  height: ${(props) => (props.size ? `${props.size}rem` : '50px')};
`;
