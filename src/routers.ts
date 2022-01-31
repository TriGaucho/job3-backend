import * as express from 'express'
import BlingRouter from './router/blingRouter'

const router = express.Router()

router.use('/api', BlingRouter)

export = router