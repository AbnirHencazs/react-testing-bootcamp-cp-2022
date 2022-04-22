import { render, screen } from '@testing-library/react'
import Footer from './Footer'

const setup = () => render(<Footer/>)

describe('Footer component test suite', () => {
    it('renders correctly', () => {
        const { container } = setup()

        expect( container.querySelector('footer') ).toBeInTheDocument()
    })

    it('renders Footer text', () => {
        setup()

        expect(screen.getByText(/project created during wizeline academy react testing bootcamp/i))
    })
})