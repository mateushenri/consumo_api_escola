import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, TextInputs, Form, Button } from './styled';
import { Container, ContainerInside } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/example/actions';
import Axios from '../../services/axios';

export default function Login() {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  React.useEffect(() => {
    async function getData() {
      await Axios.get('/alunos/show', {
        headers: {
          authorization:
            'bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoibWF0ZXVzLndpZ2dlcnM5MEBnbWFpbC5jb20iLCJpYXQiOjE2MjI3NTYyNTUsImV4cCI6MTYyMzM2MTA1NX0.hA4-yQfmJvtws-wW2cKyLAVXzr9wH4DlJmE5DVrrfpw',
        },
      }).then((res) => console.log(res.data));
    }
    getData();
  }, []);
  function handleRedux(e) {
    e.preventDefault();
    dispatch(actions.clicaBotao());
  }

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
          <Button onClick={handleRedux} type="submit">
            Login
          </Button>
        </Form>
      </ContainerInside>
    </Container>
  );
}
