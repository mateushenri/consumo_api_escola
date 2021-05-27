import React from 'react';
import { ContainerInside } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function CadastraAluno() {
  return (
    <ContainerInside>
      <Form action="https://mateuswiggers1.ddns.net/alunos/criar" method="POST">
        <label htmlFor="nome">
          Nome <input type="text" name="nome" />{' '}
        </label>

        <label htmlFor="email">
          E-mail <input type="email" name="email" />{' '}
        </label>

        <label htmlFor="idade">
          Idade <input type="text" name="idade" />
        </label>

        <label htmlFor="materias">
          Materias <input type="text" name="materias" />
        </label>
        <button type="submit">Cadastrar</button>
      </Form>
    </ContainerInside>
  );
}
