import { createGlobalStyle } from 'styled-components';

import background from '../assets/background3.jpeg'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
    }

    body{
        -webkit-font-smoothing: antialiased;
        background: #F0F0F0 url(${background});
        background-size: cover;
    }

    .navbar{
        background: #333 !important;
    }

    .container{
        color: #F0F0F0;
    }

    #root {
        margin: 0 auto;
        padding: 70px 20px;
    }

    button{
        cursor: pointer;
    }
`;