import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = render(<App />);
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');

  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {

  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {

  });

  test(`
    Verificando sua funcionalidade, ao ser clicado é necessário adicionar o que o usuário digitou
  Use os fireEvent, para simular a digitação do usuário e o clique.
  `, () => {

  });
});
