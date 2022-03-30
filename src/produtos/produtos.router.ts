import * as express from 'express'

import ProdutosController from './produtos.controller'

const router = express.Router()

router.get('/', ProdutosController.getProdutos)

export default router