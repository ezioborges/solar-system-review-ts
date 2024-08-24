import { render, screen } from "@testing-library/react";
import PlanetCard from "../components/PlanetCard";
import MercurioImg from '../images/Mercurio.png';

describe('Testando o componente "PlanetCard"', () => {
  const PLANET_NAME = 'Mercúrio';
  const renderPlanet = () => {
    render(<PlanetCard planetName={ PLANET_NAME } planetImage={ MercurioImg } />)
  };
  
  
  test('O componente é renderizado com data-testid="planet-card"', () => {
    renderPlanet();
    const divPlanetCard = screen.getByTestId('planet-card');

    expect(divPlanetCard).toBeInTheDocument();
  });

  test('O componente renderiza com o texto recebido pela prop "planetName"', () => {
    renderPlanet();

    const planetName = screen.getByText(PLANET_NAME);


    expect(planetName).toBeInTheDocument();
  })

  test('O componente PlanetCard possui um atributo src em sua imagem com o valor da prop "planetImage"', () => {
    renderPlanet();

    const planetCardImg = screen.getByRole('img');
    
    expect(planetCardImg).toBeInTheDocument();
    expect(planetCardImg).toHaveAttribute('src', MercurioImg);
  });

  test('O componente PlanetCard possui um atributo alt em sua imagem com o valor de "planetName"', () => {
    renderPlanet();

    const planetCardImg = screen.getByRole('img');

    expect(planetCardImg).toHaveAttribute('alt', PLANET_NAME);
  })
});