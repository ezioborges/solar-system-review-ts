import { render } from '@testing-library/react';
import SolarSystem from '../components/SolarSystem';
import PlanetCard from '../components/PlanetCard';
import MercurioImg from '../images/Mercurio.png';

export const renderSolarSystem = () => render(<SolarSystem />);

//essa função pode receber tanto um objeto vazio quanto os parametros da função!
export const renderPlanetCard = (name?: string, imgUrl?: string) => {
    const PLANET_NAME = name;
    const IMG_URL = imgUrl;

    render(<PlanetCard
             planetName={ PLANET_NAME || 'Mercúrio'}
             planetImage={ IMG_URL || MercurioImg }
           />)
}
