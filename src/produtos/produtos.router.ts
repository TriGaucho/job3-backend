import * as express from 'express'

import ProdutosController from './produtos.controller'

const router = express.Router()

router.route('/').get(ProdutosController.getProdutos)
router.route('/situacao').put(ProdutosController.postAtualizaProduto)
router.route('/ativos').get(ProdutosController.getProdutosAtivos)
router.route('/inativos').get(ProdutosController.getProdutosInativos)

export default router