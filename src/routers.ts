import * as express from 'express'
import ProdutosRouter from './produtos/produtos.router'

const routers = express.Router()

routers.use('/produtos', ProdutosRouter)

export default routers