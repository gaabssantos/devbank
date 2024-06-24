import styled from 'styled-components';

import themes from '../../styles/themes.json';

export const FooterContainer = styled.footer`
  background-color: ${themes.shades.gray.variant2};
  margin-top: 10rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 3rem;

  h2 {
    color: ${themes.absolutes.white};
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 2rem;
    color: ${themes.absolutes.white};
  }

  ul li {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 3rem;
`;
