import { screen } from "@testing-library/react";
import { renderMissionsCard } from "../utils";

describe('Testa o componente "MissionsCard"', () => {
    test('Se o componente é renderizado', () => {
        renderMissionsCard();
        

        const div = screen.getByTestId('mission-card');
        
        expect(div).toBeInTheDocument();
    });
    
    test('Se contem uma tag p com o data-testid="mission-name"', () => {
        renderMissionsCard();
        
        const p = screen.getByTestId('mission-name');
        const name = screen.getByText('Mariner 2');
        
        expect(p).toBeInTheDocument();
        expect(name).toBeInTheDocument();
    });

    test('Se contem uma tag p com o data-testid="mission-year"', () => {
        renderMissionsCard();
        
        const p = screen.getByTestId('mission-year');
        const year = screen.getByText('1962');
        
        expect(p).toBeInTheDocument();
        expect(year).toBeInTheDocument();
    });

    test('Se contem uma tag p com o data-testid="mission-country"', () => {
        const missionName = 'Venera 4';
        const missionYear = '1967';
        const missionCountry = 'URSS';
        const missionDestination = 'Vênus'

        renderMissionsCard(
            missionName,
            missionYear,
            missionCountry,
            missionDestination
        );
        
        const p = screen.getByTestId('mission-country');
        const country = screen.getByText(missionCountry);
        
        expect(p).toBeInTheDocument();
        expect(country).toBeInTheDocument();
    });

    test('Se contem uma tag p com o data-testid="mission-destination"', () => {
        const missionName = 'Apollo 11';
        const missionYear = '1969';
        const missionCountry = 'Estados Unidos';
        const missionDestination = 'Lua';

        renderMissionsCard(
            missionName,
            missionYear,
            missionCountry,
            missionDestination
        );
        
        const p = screen.getByTestId('mission-destination');
        const destination = screen.getByText('Lua');
        
        expect(p).toBeInTheDocument();
        expect(destination).toBeInTheDocument();
    });
});