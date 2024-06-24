import styled from 'styled-components';

import themes from '../../styles/themes.json';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-radius: 100px;
  border: 1px solid ${themes.shades.gray.variant2};
  background: ${themes.shades.gray.variant3};
  width: 100%;
  margin-top: 3rem;
  color: ${themes.shades.gray.variant10};
  padding: 1rem;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;

    p {
      font-size: 0.8rem;
    }
  }
`;
