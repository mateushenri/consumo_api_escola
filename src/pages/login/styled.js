import styled from 'styled-components';

export const Title = styled.h1`
  color: #284b63;
  margin-bottom: 10px;
`;

export const ContainerForm = styled.div`
  width: 40%;
  min-width: 400px;
  margin: 0 auto;
  background-color: #d9d9d9;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`;

export const Form = styled.form``;

export const Button = styled.button`
  margin-top: 7px;
  width: 130px;
  border-radius: 0;
  border: 1px solid transparent;
  color: #fff;
  background-color: #353535;
  height: 30px;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background-color: #fff;
    border: 1px solid #353535;
    color: #353535;
  }
`;

export const TextInputs = styled.input`
  color: #284b63;
  margin: 0 auto 4px;
  font-size: 12px;
  display: block;
  width: 80%;
  min-width: 300px;
  height: 30px;
  border: 1px solid #284b63;
  border-radius: 3px;
  background-color: #fff;
  padding: 0 10px;
`;
