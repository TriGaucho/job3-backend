import { Request, Response } from 'express' 

import BlingService from '../service/blingService'

export default class BlingController {
    static async getProdutos(req: Request, res: Response): Promise<any> {
        const result = await BlingService.getProdutos()

        if(result) return res.status(200).json(result)
    }

    static async postProduto(req: Request, res: Response): Promise<any> {
        const result = await BlingService.postPedido(req.body)

        if(result) return res.status(200).json(result)
    }

    static async postPedido(req: Request, res: Response): Promise<any> {
        const result = await BlingService.postPedido(req.body)

        if(result) return res.status(200).json(result)
    }

    static async getPedidos(req: Request, res: Response): Promise<any> {
        const result = await BlingService.getPedidos(req.params.situacao)
        if(result) return res.status(200).json(result)
    }

    static async getProdutosPedidos(req: Request, res: Response): Promise<any> {
        const result = await BlingService.getProdutosPedido(req.params.pedido)
        if(result) return res.status(200).json(result)
    }

    static async getCliente(req: Request, res: Response): Promise<any> {
        const result = await BlingService.getCliente(req.params.id)

        if(result) return res.status(200).json(result)
    }


}