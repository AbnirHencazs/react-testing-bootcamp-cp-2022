import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import Home from './Home'

/**
 * If we do not have MSW instance wich responds to a custom hooks request, we can mock custom hook returned value like the following
 * 
 */
// import usePOD from '../hooks/usePOD'
import { mockPOD } from '../mocks/APOD/mockPOD'
// jest.mock("../hooks/usePOD.js")
// usePOD.mockReturnValue({
//     pod: mockPOD,
//     loading: false
// })

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