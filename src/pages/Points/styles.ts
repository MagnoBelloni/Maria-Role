import styled from 'styled-components';
import { shade } from 'polished';

export const Main = styled.div`
    margin-top: 80px;
    background: #F0F0F0;
    padding: 20px 20px;
    
    button{
        border-color: #FFC505;
        border-radius: 50px;
    }

    button + button {
        margin-left: 20px;
    }
    
    .knowmore{
        background: #FFC500;
        color: #000;
    }

    .knowmore:hover{
        background: ${shade(0.1, '#FFC500')};
        border-color:${shade(0.1, '#FFC500')};
        transform: translateX(10px);
    }

    .colunas{
        display: inline-flex;
        padding-bottom: 20px;
    }

    .card:hover{
        transform: translateY(-10px);
        transition: transform 0.2s;
        
    }

    .card + .card {
        margin-left: 20px;
    }
`;