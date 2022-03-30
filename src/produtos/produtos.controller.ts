import { Console } from 'console'
import * as HttpStatus from 'http-status'

import Helper from '../utils/helper'
import ProdutosService from './produtos.service'

class ProdutosController {
    async getProdutos(req, res){
        try {
            const result = await ProdutosService.get()
            Helper.sendResponse(res, HttpStatus.OK, result)
        } catch (error) {
            console.log(error)
            Helper.sendResponse(res, HttpStatus.UNAUTHORIZED, error.message)
        }
    }
}

export default new ProdutosController()