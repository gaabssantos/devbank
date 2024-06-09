import styled from 'styled-components';

import themes from '../../styles/themes.json';

export const Container = styled.div``;

export const Select = styled.div`
  padding: 0.875rem;
  border-radius: 82px;
  border: 1px solid ${themes.shades.gray.variant4};
  background: ${themes.shades.gray.variant2};

  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 2rem;
  }
`;
