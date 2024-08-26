import PlanetCard from "../PlanetCard";
import Title from "../Title";
import Planets from "../../data/planets";

import './solaSystem.css';

function SolarSystem() {
  return (
    <div data-testid="solar-system" className="planet-content">
      <Title>Planetas</Title>
      <div className="list-content">
          <div className="line"></div>
          <ul
            className="planets-direction"
            data-testid="planets-list"
          >
            {Planets.map(({ name, image }) => (
              <PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
              />
            ))}
          </ul>
        </div>
    </div>
  );
}

export default SolarSystem;
