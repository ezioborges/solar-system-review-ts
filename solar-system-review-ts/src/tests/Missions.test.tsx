import { render, screen } from '@testing-library/react';
import { renderMissions } from "../utils";
import App from '../App';

import Missions from '../data/missions';

describe('Testa o componente Missions e seus componentes filho', () => {
    test('Se o compomente é chamado em App.tsx e possui uma div com "data-testid="missions"', () => { 
        render(<App />)

        // se a div com data-testid estiver correta,
        //significa que o componente Missions é chamado no arquivo App.tsx
        const div = screen.getByTestId('missions');

        expect(div).toBeInTheDocument();
     });

    test('Verifica se o componente "Title" é chamado em "Missions"', () => {
        renderMissions();

        const h2 = screen.getByRole('heading', { level: 2 });
        const text = screen.getByText('Missões');

        expect(h2).toBeInTheDocument();
        expect(text).toBeInTheDocument();
    });

    test('Testa a chamada do componente MissionsCard', () => {
        renderMissions();

        const ul = screen.getByRole('list');

        expect(ul).toBeInTheDocument();
    });

    test('Renderiza uma lista com missões espaciais', () => {
        renderMissions();

        const arraySize = Missions.length;

        const arrayList = screen.getAllByTestId('mission-card')

        expect(arrayList).toHaveLength(arraySize)
    });
});