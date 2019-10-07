import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  input {
      height: 50px;
      margin: 0 0 10px;
      padding: 0 15px;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.1);
      color: #fff;
      font-size: 18px;
      &::placeholder {
          color: rgba(255, 255, 255, 0.6);
      }
    }

  button {
    height: 50px;
    margin: 5px 0 0;
    background: #f94d69;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.5s;

    &:hover {
      	background: ${darken(0.08, '#f94d69')}
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    opacity: 0.8;

    &:hover {
      opacity: 1
    }
  }
`