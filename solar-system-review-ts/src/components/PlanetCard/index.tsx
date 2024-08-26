import './planetsCard.css';

type PlanetCardProp = {
  planetName: string,
  planetImage: string
};

function PlanetCard({ planetName, planetImage }: PlanetCardProp) {
  return (
    <div
      className="planet-card"
      data-testid="planet-card"
    >
      <div 
        className="planet-name-content"
      >
        <p
          className='planet-name'
          data-testid="planet-name"
        >
          {planetName}
        </p>
      </div>
      <div className='align-planets'>
        <img
          alt={`${planetName}`}
          className={`${planetName}`}
          src={planetImage}
        />
      </div>
    </div>
  );
};

export default PlanetCard;
