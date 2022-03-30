import * as express from 'express'
import ProdutosRouter from './produtos/produtos.router'

const router = express.Router()

router.use('/produtos', ProdutosRouter)

export = router