import { screen } from "@testing-library/react";
import { renderPlanetCard } from "../utils";

import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';

describe('Testando o componente "PlanetCard"', () => {
  const PLANET_NAME = 'Vênus';
  
  test('O componente é renderizado com data-testid="planet-card"', () => {
    renderPlanetCard(PLANET_NAME, MercurioImg);
    const divPlanetCard = screen.getByTestId('planet-card');

    expect(divPlanetCard).toBeInTheDocument();
  });

  test('O componente renderiza com o texto recebido pela prop "planetName"', () => {
    renderPlanetCard(PLANET_NAME, MercurioImg);

    const planetName = screen.getByText(PLANET_NAME);


    expect(planetName).toBeInTheDocument();
  })

  test('O componente PlanetCard possui um atributo src em sua imagem com o valor da prop "planetImage"', () => {
    renderPlanetCard('', VenusImg);

    const planetCardImg = screen.getByRole('img');
    
    expect(planetCardImg).toBeInTheDocument();
    expect(planetCardImg).toHaveAttribute('src', VenusImg);
  });

  test('O componente PlanetCard possui um atributo alt em sua imagem com o valor de "planetName"', () => {
    renderPlanetCard(PLANET_NAME);

    const planetCardImg = screen.getByRole('img');

    expect(planetCardImg).toHaveAttribute('alt', PLANET_NAME);
  })
});