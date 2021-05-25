import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function NavBar() {
  return (
    <Nav>
      <Link to="/"> HOME </Link>
      <Link to="/user"> USER </Link>
      <Link to="/login"> SIGNIN </Link>
      <Link to="/exit"> EXIT </Link>
    </Nav>
  );
}
