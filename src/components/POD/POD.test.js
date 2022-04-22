import { render, screen } from '@testing-library/react'
import { mockPOD } from '../../mocks/APOD/mockPOD'
import POD from './POD'

const setup = () => render(<POD item={mockPOD}/>)

describe('Picture of the day component test suite', () => {
    it('renders correctly its container', () => {
        setup()

        expect(screen.getByRole('article')).toBeInTheDocument()
    })
    it('renders image title', () => {
        setup()
        const headingName = new RegExp( mockPOD.title, 'i' )
        expect(screen.getByRole('heading', { name: headingName })).toBeInTheDocument()
    })
    it('renders POD date', () => {
        setup()
        const dateText = new RegExp(mockPOD.date, 'i')
        expect(screen.getByText(dateText)).toBeInTheDocument()
    })
    it.skip('renders POD explanation', () => {
        setup()

        const explanationText = new RegExp(mockPOD.explanation, 'i')
        expect(screen.getByDisplayValue(mockPOD.explanation)).toBeInTheDocument()
    })
    it('render POD picture', () => {
        setup()

        expect(screen.getByRole('img')).toBeInTheDocument()
    })
})