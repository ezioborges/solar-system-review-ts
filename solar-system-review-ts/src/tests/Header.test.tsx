import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

describe('Testando o componente Header', () => {
  test('se o componente Header, segue o padrão solicitado', () => {
    render(<Header />)

    const header = screen.getByRole('banner');
    const h1 = screen.getByRole('heading', { level: 1 });
    const h1Text = screen.getByText('Sistema Solar')


    expect(header).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
    expect(h1Text).toBeInTheDocument();
  })
})