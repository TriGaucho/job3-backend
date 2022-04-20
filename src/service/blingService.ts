import axios from 'axios'
import FormData = require('form-data')

import XmlFactory from '../factory/xmlFactory'
import ProdutosFactory from '../factory/produtosFactory'
import PedidosFactory from '../factory/pedidosFactory'

require('dotenv').config()

import rotasBling from '../configs/rotasBling'

export default class BlingService {
    static async delay() {
        return new Promise(resolve => setTimeout(resolve, 200))
    }
    
    static async getProdutos(filtro): Promise<any> {
        const situacao = filtro ? `filters=situacao[${filtro}]&` : ''
        let pagina = 1
        let produtos = []
        let response = null
        do {
            let rota = `${rotasBling.base}/produtos/page=${pagina}/json/`
            console.log(`ProdutosService - getProdutos: rota: ${rota}`)
            
            await this.delay()
            try {
                response = await axios.get(`${rota}?apikey=${process.env.APIKEY}`)
            } catch (error) {
                console.log(error)
            }

            if (response.data.retorno.erros) {
                pagina = 0
            } else {
                await ProdutosFactory.objetoProdutos(response.data.retorno.produtos, produtos)
                console.log(produtos)
                pagina++
            }

        } while (pagina != 0);
        
        console.log(produtos)
        return produtos
    }

    static async getProdutosInativos() {
        let pagina = 1
        let produtos = []
        
        do {
            let rota = `${rotasBling.base}/produtos/page=${pagina}/json/?filters=situacao[I]&`
            console.log(`ProdutosService - getProdutosInativos: rota: ${rota}`)
            
            await this.delay()

            let response = await axios.get(`${rota}apikey=${process.env.APIKEY}`)
            if (response.data.retorno.erros) {
                pagina = 0 
            } else { 
                await ProdutosFactory.objetoProdutos(response.data.retorno.produtos, produtos)
                console.log(produtos)
                pagina++
            }
        } while (pagina === 0);
        
        console.log(produtos)
        
        return  produtos
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

    static async getPedidos(situacao) {
        try {
            const response = await axios.get(`${rotasBling.get.pedidos}${process.env.APIKEY}&filters=idSituacao[${situacao}]`)
            
            const teste = await  PedidosFactory.formataPedidos(response.data.retorno.pedidos)
            return teste
        } catch (error) {
            return error
        }
    }

    static async getProdutosPedido(pedido) {
        try {
            const response = await axios.get(`${rotasBling.get.pedido}/${pedido}/json/?apikey=${process.env.APIKEY}`)

            const items = await PedidosFactory.formataProdutos(response.data.retorno.pedidos[0].pedido.itens, pedido)

            return items

        } catch (error) {
            
        }
    }

    static async atualizaSituacao(codigo, situacao){
        const data = new FormData()

        data.append('apikey', process.env.APIKEY)
        data.append('xml', `<?xml version="1.0" encoding="UTF-8"?><produto><situacao>${situacao}</situacao></produto>`)

        const rota = `${rotasBling.base}/produto/${codigo}/json/`
        console.log(`ProdutosService - postAtualizaProduto: rota: ${rota}`)

        const response = await axios.post(rota, data, { 
            headers: data.getHeaders()
        })
        console.log(response)

        const produto = await ProdutosFactory.objetoProdutos(response.data.retorno.produtos, null)
        return produto
    }


} 