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
                <ul className="mission-list">
                    {
                        missions.map(({ name, year, country, destination }) => (
                            <li
                                key={name}
                            >
                                <MissionCard
                                    name={name}
                                    year={year}
                                    country={country}
                                    destination={destination}
                                />
                            </li>
                        ))
                    }
                </ul>
      </div>
    );
};

export default Missions;
