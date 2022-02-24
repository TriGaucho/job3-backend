import * as express from 'express'
import BlingController from '../controller/blingController'

const router = express.Router()

router.get('/produtos', BlingController.getProdutos)
router.post('/produtos', BlingController.postProduto)

router.get('/cliente/:id', BlingController.getCliente)

router.post('/pedido', BlingController.postPedido)

export default router