import * as express from 'express'
import BlingRouter from './router/blingRouter'

const router = express.Router()

router.use('/bling', BlingRouter)

export = router