import styled from 'styled-components';
import { ming, gainsboro } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${ming};
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  a {
    color: ${gainsboro};
    text-align: center;
    padding: 10px 0;
    margin: 0 5px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: ${gainsboro};
      color: ${ming};
    }
  }
`;
