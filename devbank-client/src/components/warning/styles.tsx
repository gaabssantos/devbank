import styled from 'styled-components';

import { shades, absolutes } from '../../styles/themes.json';

export const Container = styled.div`
  background-color: ${shades.gray.variant4};
  width: 28rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${absolutes.white};
  padding: 1rem;
  gap: 0.25rem;
  border-radius: 3.75rem;
`;
