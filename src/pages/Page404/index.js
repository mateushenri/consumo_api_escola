import React from 'react';
import { Container } from '../../styles/GlobalStyles';

export default function Page404() {
  return (
    <Container>
      <h1> Erro 404, Página não encontrada </h1>
      <p>
        {' '}
        A página que está tentando acessar não existe. Por favor verifique o
        endereço e tente novamente.{' '}
      </p>
    </Container>
  );
}
