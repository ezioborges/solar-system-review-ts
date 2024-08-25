import { screen } from "@testing-library/react";
import { renderMissionsCard } from "../utils";

describe('Testa o componente "MissionsCard"', () => {
    test('Se o componente é renderizado', () => {
        renderMissionsCard({});
        

        const div = screen.getByTestId('mission-card');
        
        expect(div).toBeInTheDocument();
    });
    
    test('Se contem uma tag p com o data-testid="mission-name"', () => {
        renderMissionsCard({});
        
        const p = screen.getByTestId('mission-name');
        const name = screen.getByText('Mariner 2');
        
        expect(p).toBeInTheDocument();
        expect(name).toBeInTheDocument();
    });

    test('Se contem uma tag p com o data-testid="mission-year"', () => {
        renderMissionsCard({});
        
        const p = screen.getByTestId('mission-year');
        const year = screen.getByText('1962');
        
        expect(p).toBeInTheDocument();
        expect(year).toBeInTheDocument();
    });

    test('Se contem uma tag p com o data-testid="mission-country"', () => {
        renderMissionsCard({});
        
        const p = screen.getByTestId('mission-country');
        const country = screen.getByText('Estados Unidos');
        
        expect(p).toBeInTheDocument();
        expect(country).toBeInTheDocument();
    });

    test('Se contem uma tag p com o data-testid="mission-destination"', () => {
        renderMissionsCard({});
        
        const p = screen.getByTestId('mission-destination');
        const destination = screen.getByText('Vênus');
        
        expect(p).toBeInTheDocument();
        expect(destination).toBeInTheDocument();
    });
});