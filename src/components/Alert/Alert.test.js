import { render, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import Alert from "./Alert";

const setup = (props) => render(<Alert { ...props }/>)

describe('Alert component test suite', () => {
    it("renders Error alert correctly", () => {
        const { getByRole } = setup({ type: 'error', show: true, content: 'Error message' })

        expect(getByRole('alert')).toBeInTheDocument()
        expect(getByRole('alert').className.includes('error')).toBeTruthy()
    })
    it('Dissapears after 1.5 seconds', async() => {
        const { getByRole } = setup({ type: 'error', show: true, content: 'Error message' })
        const alertEl = getByRole('alert')
        expect(alertEl).toBeInTheDocument()
        await waitForElementToBeRemoved(alertEl, { timeout: 1500 })
        expect(alertEl).not.toBeInTheDocument()
    })
})