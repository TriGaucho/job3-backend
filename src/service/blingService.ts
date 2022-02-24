import axios from 'axios'
import FormData = require('form-data')

import XmlFactory from '../factory/xmlFactory'
import ProdutosFactory from '../factory/produtosFactory'

require('dotenv').config()

import rotasBling from '../configs/rotasBling'

export default class BlingService {
    static async getProdutos(): Promise<any> {
      try{
        const response = await axios.get(`${rotasBling.get.produtos}${process.env.APIKEY}`)
        return ProdutosFactory.objetoProdutos(response.data.retorno.produtos)
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

    static async getCliente(cpf): Promise<any> {
        try {
            const response = await axios.get(`${rotasBling.get.cliente}${cpf}/json/?apikey=${process.env.APIKEY}`)
            return {
                clienteNome: response.data.retorno.contatos[0].contato.nome,
                clienteCpf: response.data.retorno.contatos[0].contato.cnpj,
                clienteFone: response.data.retorno.contatos[0].contato.fone
            }
        } catch (error) {
            return error
        }
    }

    static async postProduto(xmlProduto) {
        const data = new FormData()
        data.append('apikey', process.env.APIKEY)
        data.append('xml', xmlProduto)

        try {
            const response = await axios.post(rotasBling.post.produto, data, { 
                headers: data.getHeaders()
            })
            return response.data
        }catch (error) {
            return error
        }
    }
}