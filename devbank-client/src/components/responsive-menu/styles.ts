import styled from 'styled-components';

import themes from '../../styles/themes.json';

interface ItemProps {
  active?: boolean;
}

export const Container = styled.div`
  @keyframes slideRight {
    from {
      width: 0;
    }

    to {
      width: 50%;
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  animation-name: slideRight;
  animation-duration: 0.5s;
  width: 50%;
  height: 100%;
  background-color: ${themes.shades.gray.variant1};
`;

export const Items = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.625rem;
  height: 100%;
`;

export const Item = styled.li<ItemProps>`
  cursor: pointer;
  background-color: ${(props) =>
    props.active && `${themes.shades.gray.variant4}`};
  padding: ${(props) => props.active && `0.75rem 1.5rem`};
  border-radius: ${(props) => props.active && `3.125rem`};
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;
