import { render, screen } from '@testing-library/react';
import Title from '../components/Title';
import SolarSystem from '../components/SolarSystem';

describe('Testes do componente "Title"', () => {
  test('O componente Title', () => {
    render(<Title>Planetas</Title>)
    
    const h2 = screen.getByRole('heading', { level: 2 });
    const text = screen.getByText('Planetas');
  
    expect(h2).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  })

  test('Se o componente title é chamadono componente "SolarSystem"', () => {
    render(<SolarSystem />)

    const h2 = screen.getByRole('heading', { level: 2 });
    const text = screen.getByText('Planetas');

    expect(h2).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});