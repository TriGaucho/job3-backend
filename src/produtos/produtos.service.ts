import axios from 'axios'
import FormData = require('form-data')

import RotasExternas from '../configs/rotasExternas'
import ProdutosFactory from './produtos.factory'

require('dotenv').config()

class ProdutosService {
    async getProdutos() {
        const produtosAtivos = await this.getProdutosAtivos()
        console.log(`Ativos: ${produtosAtivos}`)

        const produtosInativos = await this.getProdutosInativos()
        console.log(`Inativos: ${produtosInativos}`)

        return {
            produtosAtivos, produtosInativos
        }
        
    }

    async getProdutosAtivos() {
        const rota = `${RotasExternas.urlAPI}/produtos/json`
        console.log(`ProdutosService - getProdutosAtivos: rota: ${rota}`)

        const response = await axios.get(`${rota}/?apikey=${process.env.APIKEY}`)
        const produtos = await ProdutosFactory.objetoProdutos(response.data.retorno.produtos)
        console.log(produtos)
        
        return  produtos
    }

    async getProdutosInativos() {
        const rota = `${RotasExternas.urlAPI}/produtos/json/?filters=situacao[I]&`
        console.log(`ProdutosService - getProdutosInativos: rota: ${rota}`)

        const response = await axios.get(`${rota}apikey=${process.env.APIKEY}`)
        const produtos = await ProdutosFactory.objetoProdutos(response.data.retorno.produtos)
        console.log(produtos)
        
        return  produtos
    }

    // ESTUDAR MEIO DE ATUALIZAR  SITUACAO VIA ARRAY
    // async postAtualizaProduto(produtos){
    //     let response = []
 
    //     produtos.forEach(async (p) => {
    //         response.push(await this.atualizaSituacao(p.situacao,p.codigo))
    //     })

    //     return response
    // }

    async atualizaSituacao(codigo, situacao){
        const data = new FormData()

        data.append('apikey', process.env.APIKEY)
        data.append('xml', `<?xml version="1.0" encoding="UTF-8"?><produto><situacao>${situacao}</situacao></produto>`)

        const rota = `${RotasExternas.urlAPI}/produto/${codigo}/json/`
        console.log(`ProdutosService - postAtualizaProduto: rota: ${rota}`)

        const response = await axios.post(rota, data, { 
            headers: data.getHeaders()
        })

        const produto = await ProdutosFactory.objetoProdutos(response.data.retorno.produtos)
        return produto
    }
}

export default new ProdutosService()