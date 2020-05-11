import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Verificando se existe um campo para inserir a tarefa.', () => {
  const { getByLabelText, getByText } = render(<App />)
  expect(getByText('Tarefa:')).toBeInTheDocument();
  expect(getByLabelText('Tarefa:')).toBeInTheDocument();
});
