import { render, screen } from "@testing-library/react"
import App from "../App";

test('Testando o componente "SolarSystem"', () => {
  render(<App />)

  const div = screen.getByTestId('solar-system');

  expect(div).toBeInTheDocument();
})