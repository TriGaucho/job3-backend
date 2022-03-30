import axios from 'axios'
import RotasExternas from '../configs/rotasExternas'

import ProdutosFactory from './produtos.factory'

require('dotenv').config()

class ProdutosService {
    async get() {
        const rota = `${RotasExternas.urlAPI}/produtos/json/?apikey=${process.env.APIKEY}`

            console.log(`ProdutosService - get: rota: ${rota}`)
            const response = await axios.get(rota)

            const produtos = await ProdutosFactory.objetoProdutos(response.data.retorno.produtos)
            console.log(produtos)
            
            return  produtos
        
    }
}

export default new ProdutosService()