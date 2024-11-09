import { createGlobalStyle } from "styled-components";

import PoppinsBold from "./fonts/Poppins-Bold.ttf";
import PoppinsRegular from "./fonts/Poppins-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Poppins-Regular";
        font-style: normal;
        font-weight: 400;
        src: url(${PoppinsRegular}) format('truetype'),
    }
    @font-face {
        font-family: "Poppins-Bold";
        font-style: normal;
        font-weight: 700;
        src: url(${PoppinsBold}) format('truetype'),
    }

    body {
        margin: 0;
        display: block;
        font-family: "Poppins-Regular";
        font-weight: 400;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: linear-gradient(
            to right bottom,
            #d16ba5,
            #c777b9,
            #ba83ca,
            #aa8fd8,
            #9a9ae1,
            #8aa7ec,
            #79b3f4,
            #69bff8,
            #52cffe,
            #41dfff,
            #46eefa,
            #5ffbf1
        );
    }
    ul,
    ol {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    input {
        background-color: transparent;
        border: none;
    }
    button {
        cursor: pointer;
    }
`;
