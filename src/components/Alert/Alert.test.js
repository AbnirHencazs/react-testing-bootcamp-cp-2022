import { render, waitFor, waitForElementToBeRemoved, fireEvent } from "@testing-library/react";
import { DateTime } from "luxon";
import Alert from "./Alert";
import Home from "../../pages/Home";
import usePOD from "../../hooks/usePOD";
jest.mock("../../hooks/usePOD.js")


const setup = (props) => render(<Alert { ...props }/>)

describe('Alert component test suite', () => {
    it("renders Error alert correctly", () => {
        const { getByRole } = setup({ type: 'error', show: true, content: 'Error message' })

        expect(getByRole('alert')).toBeInTheDocument()
        expect(getByRole('alert').className.includes('error')).toBeTruthy()
    })

    it("Renders Error message when an invalid date is requested and dissapears after 1.5 seconds", async () => {
        usePOD.mockReturnValue({
            error: {
                e: true,
                code: 400
            },
            date: DateTime.now().plus({ day: 2 }),
        })
        const { getByRole, getByLabelText } = render(<Home/>)

        const dateInput = getByLabelText(/pick a date/i)
        fireEvent.change(dateInput, { target: { value: DateTime.now().plus({ days: 1 }).toFormat('yyyy-MM-dd') } })
        const alertEl = getByRole('alert')
        await waitFor(() => expect(alertEl).toBeInTheDocument(), { timeout: 2000 })
        await waitFor(() => expect(alertEl).not.toBeInTheDocument(), { timeout: 2000 })
    })
})