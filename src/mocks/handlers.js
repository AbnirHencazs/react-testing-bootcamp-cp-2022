import { rest } from 'msw'
import { mockPOD } from './APOD/mockPOD'

export const handlers = [
    rest.get('/planetary/apod', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockPOD)
        )
    })
]