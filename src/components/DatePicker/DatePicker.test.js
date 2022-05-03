import { render, screen } from '@testing-library/react'
import DatePicker from './DatePicker'

const setup = () => render(<DatePicker/>)

describe('DatePicker component test suite', () => {
    it('Renders correctly', () => {
        setup()

        const datePickerEl = screen.getByLabelText(/pick a date/i)
        expect(datePickerEl).toBeInTheDocument()
    })
})