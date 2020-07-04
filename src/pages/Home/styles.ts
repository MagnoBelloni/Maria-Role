import styled from 'styled-components';
import { shade } from 'polished';

export const Main = styled.div`
    margin-left: 25%;
    margin-top: 15%;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const NavBar = styled.nav`
  background: #333;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 900px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background-color: #FFC500;
    border-radius: 0 5 5 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#FFC500')};
    }
  }
`;

export const Cards = styled.div`
  margin-top: 80px;
  margin-left: 20%;

  max-width: 1200px;
  
  background: #F0F0F0;

  h2{
    padding-left: 30%;
    color: #FFC500;
    background: #333;
  }

  div{
    display: flex;

    a {
      margin: 20px 20px;
      background: #fff;
      border-radius: 5px;
      width: 100%;
      padding: 24px;
      display: block;
      text-decoration: none;

      align-items: center;
      transition: transform 0.2s;

      & + a {
        margin-left: 50px;
      }

      &:hover {
        transform: translateY(-10px);
      }

      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }

      strong {
        font-size: 20px;
        color: #3d3d4d !important;
      }

      p {
        font-size: 18px;
        color: #a8a8b3 !important;
        margin-top: 4px;
      }
    

      svg {
        margin-left: auto;
        color: #cbcbd6 !important;
      }
  }
  }
  
`;
