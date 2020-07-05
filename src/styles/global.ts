import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

import background from '../assets/background.jpeg'

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

    .nav-link{
        color: #FFC500;
        text-decoration: none;
    }
    .nav-link:hover{
        color: ${shade(0.3, '#FFC500')};
    }
    
    #root {
        margin: 0 auto;
        padding: 70px 20px;
    }

    button{
        cursor: pointer;
    }
`;