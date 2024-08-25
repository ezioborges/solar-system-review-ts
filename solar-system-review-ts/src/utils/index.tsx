import { render } from '@testing-library/react';
import SolarSystem from '../components/SolarSystem';
import PlanetCard from '../components/PlanetCard';
import MercurioImg from '../images/Mercurio.png';
import Missions from '../components/Missions';
import MissionCard from '../components/MissionCard';

export const renderSolarSystem = () => render(<SolarSystem />);
export const renderMissions = () => render(<Missions />)

//essa função pode receber parametros vazios ou pararametros com props para a renderização do componente!
export const renderPlanetCard = (name?: string, imgUrl?: string) => {
  const PLANET_NAME = name;
  const IMG_URL = imgUrl;

  render(<PlanetCard
    planetName={PLANET_NAME || 'Mercúrio'}
    planetImage={IMG_URL || MercurioImg}
  />)
};


export const renderMissionsCard = (
  name?: string,
  year?: string,
  country?: string,
  destination?: string
  ) => {
  const missionName = name;
  const missionYear = year;
  const missionCountry = country;
  const missionDestination = destination;
  render(
    <MissionCard
      name={ missionName || 'Mariner 2' }
      year={ missionYear || '1962' }
      country={ missionCountry || 'Estados Unidos' }
      destination={ missionDestination || 'Vênus' }
  />)
}
