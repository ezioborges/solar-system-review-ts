import { render, screen } from "@testing-library/react"
import App from "../App";
import { renderSolarSystem } from "../utils";

import venusImg from '../images/Venus.png';

describe('Testes do componente "SolarSystem"', () => {
  const PLANET_NAME = 'Mercúrio';

  test('renderiza o componente com data-testid="solar-system"', () => {
    render(<App />)
  
    const div = screen.getByTestId('solar-system');
  
    expect(div).toBeInTheDocument();
  });

  test('se a lista de planetas é renderizada', () => {
    renderSolarSystem();

    const planetMercurio = screen.getByText(PLANET_NAME);
    const planetImg = screen.getAllByRole('img')
    const planetsList = screen.getByRole('list')
    const listTestId = screen.getByTestId('planets-list')
    const cardsTestId = screen.getAllByTestId('planet-card')

    expect(planetMercurio).toBeInTheDocument();
    
    expect(planetImg).toHaveLength(8);
    expect(planetImg[1]).toHaveAttribute('src', venusImg)
    
    expect(planetsList).toBeInTheDocument();
    
    expect(listTestId).toBeInTheDocument();
    
    expect(cardsTestId).toHaveLength(8);
  });
});