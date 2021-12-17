import * as express from 'express'
import BlingController from '../controller/blingController'

const router = express.Router()

router.get('/produtos', BlingController.getBling)
router.post('/pedido', BlingController.postPedido)

export default router