import React from 'react';
import { toast } from 'react-toastify';
import { Title, TextInputs, Form, Button } from './styled';
import { Container, ContainerInside } from '../../styles/GlobalStyles';

export default function Login() {
  toast.error('teste', { toastId: 1 });
  return (
    <Container>
      <ContainerInside>
        <Title>Faça seu login!</Title>
        <Form action="https://mateuswiggers1.ddns.net/token" method="POST">
          <TextInputs
            name="email"
            type="email"
            placeholder="Digite seu e-mail..."
          />
          <TextInputs
            name="senha"
            type="password"
            placeholder="Digite sua senha..."
          />
          <Button type="submit">Login</Button>
        </Form>
      </ContainerInside>
    </Container>
  );
}
