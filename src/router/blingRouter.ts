import * as express from 'express'
import BlingController from '../controller/BlingController'

const router = express.Router()

router.get('/', BlingController.getBling)

export default router