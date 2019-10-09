import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html {
        height: 100%;
        font-size: 62.5%;
    }

    body {
        height: 100%;        
        overflow: hidden;
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
    }

    #root {
        height: 100%;
    }

    body, input, button {
        font-family: 'Ubuntu', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`