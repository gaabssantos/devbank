import styled from 'styled-components';

import themes from '../../styles/themes.json';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
  gap: 2rem;
  color: ${themes.absolutes.white};
  align-items: flex-start;
`;

export const Card = styled.div`
  background-color: ${themes.shades.gray.variant4};
  border-radius: 1.25rem;
  padding: 2rem;
  border: 1px solid ${themes.primary.variant1};
  width: 45%;
  text-align: center;
  line-height: 2rem;

  span {
    display: block;
  }

  p {
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Activities = styled.div`
  border: 1px solid ${themes.primary.variant1};
  border-radius: 1.25rem;
  padding: 2rem;
`;

export const Activity = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
  }
`;

export const ActivityEmpty = styled.p`
  margin-top: 1rem;
`;

export const Transfer = styled.div`
  border-top: 1px solid ${themes.shades.gray.variant8};
  margin-top: 1rem;
  padding-top: 1rem;
`;
