import { Request, Response } from 'express' 

import BlingService from '../service/blingService'

export default class BlingController {
    static async getBling(req: Request, res: Response): Promise<any> {
        const result = await BlingService.getProdutos()

        if(result) return res.status(200).json(result)
    }

    static async postPedido(req: Request, res: Response): Promise<any> {
        const result = await BlingService.postPedido(req.body)

        if(result) return res.status(200).json(result)
    }
}