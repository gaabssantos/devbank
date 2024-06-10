import styled from 'styled-components';

import { absolutes, primary, shades } from '../styles/themes.json';

type SpacerProps = {
  size?: number;
};

type TextProps = {
  margin?: string;
};

type FlexProps = {
  justify?: string;
  align?: string;
  wrap?: boolean;
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

export const TitleSmall = styled.h3`
  color: ${absolutes.white};
  font-size: 15px;
  font-weight: 400;
  line-height: 150%;
`;

export const SpecialTitle = styled.span`
  color: ${primary.variant1};
`;

export const Text = styled.p<TextProps>`
  color: ${shades.gray.variant10};
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

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'no-wrap')};
`;

export const Divider = styled.div`
  width: 1px;
  height: 19rem;
  border: 1px solid ${shades.gray.variant4};
  margin: 20px;

  @media (max-width: 600px) {
    display: none;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  width: 80px;
  height: 80px;
  text-align: center;
  padding-top: 1.56rem;
`;
