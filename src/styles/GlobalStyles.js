import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding:0;
    }

    a {
      text-decoration: none;
      color: #000;
    }
    body{
      background-color: #FFF;
    }
`;

export const Container = styled.section`
  width: 85%;
  max-width: 400px;
  min-width: 360px;
  margin: 0 auto;
`;

export const ContainerInside = styled.div`
  width: 40%;
  min-width: 400px;
  margin: 0 auto;
  background-color: #d9d9d9;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`;
