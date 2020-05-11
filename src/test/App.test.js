import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Verificando um se existe um campo para inserir a tabela.', () => {
  const { getByLabelText, getByText } = render(<App />)
  expect(getByText('Tarefa:')).toBeInTheDocument();
  expect(getByLabelText('Tarefa:')).toBeInTheDocument();
});
