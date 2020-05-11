import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  const { getByLabelText, getByText } = render(<App />);
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {

  });

  test(`
    Verificando sua funcionalidade, ao ser clicado é necessário adicionar o que o usuário digitou
  Use os fireEvent, para simular a digitação do usuário e o clique.
  `, () => {

  });
});
