import styled from 'styled-components';

import themes from '../../styles/themes.json';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  border-bottom: 2px solid ${themes.shades.gray.variant4};
  border-top: 2px solid ${themes.shades.gray.variant4};
  width: 100%;
  padding: 3.125rem;
  margin-top: 3rem;
`;

export const Item = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${themes.absolutes.white};

  svg {
    color: ${themes.primary.variant1};
  }
`;
