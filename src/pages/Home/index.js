import React from 'react';
import { Container, ContainerInside } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Home() {
  return (
    <Container>
      <ContainerInside>
        <Title> Hello World </Title>
      </ContainerInside>
    </Container>
  );
}
