import { Request, Response } from 'express'
import * as HttpStatus from 'http-status'

import Helper from '../utils/helper'
import ProdutosService from './produtos.service'

class ProdutosController {
    async getProdutos(req, res){
        try {
            const result = await ProdutosService.getProdutos()
            Helper.sendResponse(res, HttpStatus.OK, result)
        } catch (error) {
            console.log(error)
            Helper.sendResponse(res, HttpStatus.UNAUTHORIZED, error.message)
        }
    }

    async getProdutosAtivos(req, res){
        try {
            const result = await ProdutosService.getProdutosAtivos()
            Helper.sendResponse(res, HttpStatus.OK, result)
        } catch (error) {
            console.log(error)
            Helper.sendResponse(res, HttpStatus.UNAUTHORIZED, error.message)
        }
    }

    async getProdutosInativos(req, res){
        try {
            const result = await ProdutosService.getProdutosInativos()
            Helper.sendResponse(res, HttpStatus.OK, result)
        } catch (error) {
            console.log(error)
            Helper.sendResponse(res, HttpStatus.UNAUTHORIZED, error.message)
        }
    }

    async postAtualizaProduto(req: Request, res: Response){
        const { codigo, situacao } = req.body
        try {
            const result = await ProdutosService.atualizaSituacao(codigo, situacao)
            Helper.sendResponse(res, HttpStatus.OK, result)
        } catch (error) {
            console.log(error)
            Helper.sendResponse(res, HttpStatus.UNAUTHORIZED, error.message)
        }
    }
}

export default new ProdutosController()