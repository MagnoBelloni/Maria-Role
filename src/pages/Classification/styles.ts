import styled from 'styled-components';

export const Main = styled.div`
    margin-top: 40px;
    background: #F0F0F0;
    padding: 20px 20px;

    img {
        width: 400px;
        height: 400px;
        border-radius: 50%;
    }

    .estrela{
        color: yellow;
    }
`;

export const Rewards = styled.div`
    /* max-width: 700px; */

    p {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + p {
          margin-top: 16px;
        }

        &:hover {
          transform: translateX(10px);
        }

        img, svg {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        div {
          margin-left: 16px;

          strong {
            font-size: 20px;
            color: #3d3d4d;
          }

          p {
            font-size: 18px;
            margin-top: 4px;
          }
        }

        svg {
          margin-left: auto;
          color: #cbcbd6;
        }
    }
`;