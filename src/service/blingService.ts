import axios from 'axios'
import FormData = require('form-data')

import XmlFactory from './xmlFactory'
require('dotenv').config()

import rotasBling from '../configs/rotasBling'

export default class BlingService {
    static async getProdutos(): Promise<any> {
      try{
        const response = await axios.get(`${rotasBling.get.produtos}${process.env.APIKEY}`)
        return response.data
        }catch{
           throw {msd: 'erro'} 
        }
    }

    static async postPedido(jsonXML): Promise<any> {
        const xml = await XmlFactory.converteJSON(jsonXML)

        const data = new FormData()
        data.append('apikey', process.env.APIKEY)
        data.append('xml', xml)

        try {

            const response = await axios.post(rotasBling.post.pedido, data, { 
                headers: data.getHeaders()
            })
            return response.data
        }catch (error) {
            return error
        }
    }
    
}