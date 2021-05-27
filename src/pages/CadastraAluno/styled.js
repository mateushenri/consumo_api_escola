import styled from 'styled-components';
import { jet, white, indigoDye } from '../../config/colors';

export const Form = styled.form`
  text-align: center;
  display: block;

  label {
    display: flex;
    line-height: 45px;
  }
  input {
    height: 20px;
    width: 75%;
    margin: 5px 5px 5px auto;

    color: ${indigoDye};

    font-size: 12px;

    min-width: 300px;
    height: 30px;
    border: 1px solid ${indigoDye};
    border-radius: 3px;
    background-color: ${white};
    padding: 0 10px;
  }
  button {
    width: 180px;
    margin: 5px 5px 5px;
    background-color: ${jet};
    height: 25px;
    color: ${white};
    font-weight: bold;
    border: 2px solid transparent;
    transition: 0.3s;
  }

  button:hover {
    background-color: ${white};
    border: 2px solid ${jet};
    color: ${jet};
  }
`;
