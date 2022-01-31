import * as express from 'express'
import BlingController from '../controller/blingController'

const router = express.Router()

router.get('/produtos', BlingController.getProdutos)
router.post('/pedido', BlingController.postPedido)
router.get('/cliente/:id', BlingController.getCliente)

export default router