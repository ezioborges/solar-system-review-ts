import MissionCard from "../MissionCard";
import Title from "../Title";
import missions from '../../data/missions';

import './mission.css';

function Missions() {    
    return (
        <div
            className="missions"
            data-testid="missions"
        >
            <div className="title">
                <Title>Missões</Title>
            </div>
            <ul>
                {
                    missions.map(({name, year, country, destination}) => (
                        <MissionCard
                            key={name}
                            name={name}
                            year={year}
                            country={country}
                            destination={destination}
                        />
                    ))
                }
            </ul>
      </div>
    );
};

export default Missions;
