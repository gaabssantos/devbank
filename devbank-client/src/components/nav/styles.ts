import styled from 'styled-components';

import themes from '../../styles/themes.json';

interface ItemProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${themes.absolutes.white};
  background-color: ${themes.shades.gray.variant2};
  border: 1px solid ${themes.shades.gray.variant4};
  border-radius: 50px;
  margin-top: 3.125rem;
  padding: 1.25rem 2.125rem;

  @media (min-width: 800px) and (max-width: 970px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

export const Items = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 1.625rem;
`;

export const Item = styled.li<ItemProps>`
  cursor: pointer;
  background-color: ${(props) =>
    props.active && `${themes.shades.gray.variant4}`};
  padding: ${(props) => props.active && `0.75rem 1.5rem`};
  border-radius: ${(props) => props.active && `3.125rem`};
`;

export const ResponsiveHidden = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Responsive = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;
