import axios from 'axios'
require('dotenv').config()

export default class BlingService {
    static async getBling(): Promise<any> {
      try{
        const response = await axios.get(`https://bling.com.br/Api/v2/produtos/json/?apikey=${process.env.APIKEY}`)
        console.log(response.data)
        return response.data
        }catch{
           throw {msd: 'erro'} 
        }
    }
}