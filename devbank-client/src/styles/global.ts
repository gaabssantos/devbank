import { createGlobalStyle } from 'styled-components';

import themes from '../styles/themes.json';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lexend';
    }

    body {
        background-color: ${themes.shades.gray.variant3};
    }
`;
