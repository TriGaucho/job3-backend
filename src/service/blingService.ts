import axios from 'axios'

export default class BlingService {
    static async getBling(): Promise<any> {
        const response = await axios.get('https://bling.com.br/Api/v2/produtos/json/?apikey=19990fa5b69f53dbe8b9f4e23ccf4afd4ed408b4dccc54e9bbebfd9c957c60f40ffcabc2')
        console.log(response.data)

        return response.data
    }
}