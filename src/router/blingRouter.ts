import * as express from 'express'
import BlingController from '../controller/blingController'

const router = express.Router()

router.get('/', BlingController.getBling)

export default router