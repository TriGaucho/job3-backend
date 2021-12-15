import { Request, Response } from 'express' 

import BlingService from '../service/blingService'

export default class BlingController {
    static async getBling(req: Request, res: Response): Promise<any> {
        const result = await BlingService.getBling()

        if(result) return res.status(200).json(result)
    }
}