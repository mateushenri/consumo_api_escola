import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './styled';

export default function NavBar() {
  const botaoClicado = useSelector(
    (state) => state.exampleReducer.botaoClicado
  );
  console.log(botaoClicado);

  return (
    <Nav>
      <Link to="/"> HOME </Link>
      <Link to="/user"> USER </Link>
      <Link to="/login"> SIGNIN </Link>
      <Link to="/exit"> EXIT </Link>
      {botaoClicado ? <Link to="/"> HOME </Link> : 'não clicado'}
    </Nav>
  );
}
