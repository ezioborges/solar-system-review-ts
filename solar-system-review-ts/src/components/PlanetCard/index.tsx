type PlanetCardProp = {
    planetName: string,
    planetImage: string
}

function PlanetCard({ planetName, planetImage }: PlanetCardProp) {
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{ planetName }</p>
      <img src={ planetImage } alt={`${planetName}`} />
    </div>
  );
};

export default PlanetCard;
