import styled from 'styled-components';

import themes from '../../styles/themes.json';

export const Container = styled.div`
  border-radius: 1.25rem;
  border: 1px solid ${themes.shades.gray.variant4};
  background:
    lightgray 50% / cover no-repeat,
    #1c1c1c;
  background-blend-mode: overlay, normal;
  margin-top: 3.31rem;
  padding: 6.25rem 9.37rem;
  text-align: center;

  @media (max-width: 600px) {
    padding: 0;
    padding-bottom: 1rem;

    p {
      font-size: 1rem;
      width: 95%;
    }
  }

  @media (min-width: 601px) and (max-width: 800px) {
    padding: 2rem;

    p {
      width: 100%;
    }
  }
`;

export const InputControl = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;

  input {
    width: 100%;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const Actions = styled.div`
  button {
    display: block;
    margin: 0 auto;
    width: 50%;
    padding: 1.25rem;
  }

  button#login {
    border-radius: 3.93rem;
    border: 1px solid ${themes.shades.gray.variant5};
    background: ${themes.shades.gray.variant4};
    margin-top: 1.5rem;
  }
`;
