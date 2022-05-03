import { render, screen } from '@testing-library/react'
import Home from './Home'
import { mockPOD } from '../mocks/APOD/mockPOD'


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
    it("Renders Loading component and then POd component replaces it", async () => {
        const { findByText, getByTestId } = setup()
        const loading = getByTestId(/loading/i)
        expect(loading).toBeInTheDocument()

        const paragraph = await findByText(mockPOD.explanation)
        expect(paragraph).toBeInTheDocument()
        expect(paragraph.textContent).toEqual(mockPOD.explanation)
        expect(loading).not.toBeInTheDocument()
    })
})