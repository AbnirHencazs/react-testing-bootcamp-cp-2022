import { render, screen } from '@testing-library/react'
import Header from './Header'

const setup = () => render(<Header/>) 
describe('Header test suite', () => {
    it('Renders correctly', () => {
        const { container } = setup()
        expect(container.querySelector('header')).toBeInTheDocument()
    })

    test('Header has text Awesome Picture of the Day Project', () => {
        setup()

        expect(screen.getByRole('heading', {name: /awesome picture of the day project/i})).toBeInTheDocument()
    })
})