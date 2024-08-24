import PlanetCard from "../PlanetCard";
import Title from "../Title";

import Planets from "../../data/planets";

function SolarSystem() {
  return (
    <div data-testid="solar-system">
        <Title>Planetas</Title>
        <ul data-testid="planets-list">
          {
            Planets.map(({ name, image }) => (
              <PlanetCard
                key={ name }
                data-testid="cards-list"
                planetName={ name }
                planetImage={ image }
              />
            ))
          }
        </ul>
    </div>
  );
}

export default SolarSystem;
