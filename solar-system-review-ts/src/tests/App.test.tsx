import { render, screen } from '@testing-library/react';
import App from '../App';

test('se a aplicação está rodando com as devidas instações para testes', () => {
  render(<App />)

  const h1 = screen.getByRole('heading', { level: 1 });
  const text = screen.getByText(/testando a aplicação/i);


  expect(h1).toBeInTheDocument();
  expect(text).toBeInTheDocument();
})