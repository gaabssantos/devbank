import styled from 'styled-components';

import themes from '../../styles/themes.json';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${themes.shades.gray.variant4};
  background:
    linear-gradient(267deg, #1c1c1c 40.67%, rgba(28, 28, 28, 0) 99.81%)
      lightgray 0% 0% / 62.46418356895447px 62.46418356895447px repeat,
    #1c1c1c;

  background-blend-mode: normal, screen, normal;
  padding: 5rem;
  color: ${themes.absolutes.white};

  p {
    color: ${themes.shades.gray.variant10};
    margin-top: 0.875rem;
    width: 75%;
  }

  button {
    width: 25%;
  }

  @media (max-width: 1000px) {
    text-align: center;
    flex-wrap: wrap;

    p,
    button {
      width: 100%;
    }

    button {
      margin-top: 1rem;
    }
  }
`;
