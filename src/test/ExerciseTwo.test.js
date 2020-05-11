import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByRole } = render(<App />) // Caso precise de uma nova query adicione no object destructuring
  const inputTask = getByLabelText('Tarefa:');
  const btnAdd = getByRole('button');

  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.

  })
});

describe('Testando o Componente item', () => {
  test('ao receber uma string na props ela precisa aparecer na tela.', () => {

  })
})
