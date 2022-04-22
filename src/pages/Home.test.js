import { render, screen } from '@testing-library/react'
import Home from './Home'
const setup = () => render(<Home/>)

describe('Home page test suite', () => {
    it('renders correctly', () => {
        const { container } = setup()

        expect(container.querySelector('section')).toBeInTheDocument()
    })

    it('Renders DatePicker component', () => {
        setup()

        const datePickerEl = screen.getByLabelText(/pick a date/i)
        expect(datePickerEl).toBeInTheDocument()
    })

    it('Renders Picture of the Day component', () => {
        setup()

        const PODel = screen.getByRole('article')
        expect(PODel).toBeInTheDocument()
    })
})