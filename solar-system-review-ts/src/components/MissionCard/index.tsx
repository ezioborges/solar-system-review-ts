import { FaFlag } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";


import './missionCard.css';

type MissionCardProps = {
    name: string,
    year: string,
    country: string,
    destination: string
} 

function MissionCard({name, year, country, destination} : MissionCardProps) {
    
    return (
      <div
        className='mission-card'
        data-testid="mission-card"
      >
        <div>
          <p
            className='mission-name'
            data-testid="mission-name">
            {name}
          </p>
        </div>
        <div className='line-mission-card' />
        <div className='footer-mission-card'>
          <div className="adjust-icons">
            <MdDateRange className="icons" />
            <span
              className='mission-year'
              data-testid="mission-year"
            >
              {year}
            </span>
          </div>
          <div className="adjust-icons">
            <FaFlag className="icons" />
            <span
              className='mission-country'
              data-testid="mission-country"
            >
              {country}
            </span>
          </div>
          <div className="adjust-icons">
            <IoLocation className="icons" />
            <span
              className='mission-destination'
              data-testid="mission-destination"
            >
              {destination}
            </span>
          </div>
        </div>
      </div>
  );
}

export default MissionCard;
