import styled from 'styled-components';

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  width: 25rem;
  padding-left: 5rem;
  padding-top: 5rem;
  pointer-events: none;

  @media (max-width: 1200px) {
    position: relative;
    padding: 0;
    display: block;
    margin: 0 auto;
  }
`;
