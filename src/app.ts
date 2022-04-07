import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

import Router from './routers'

class App {
    public app: express.Application;

    private bodyParser

    constructor() {
        this.app = express()

        this.routes()
    }

    enableCors(){
        const options: cors.CorsOptions = {
            methods: "GET, OPTIONS, PUT, POST, DELETE",
            origin: "*"
        }

        this.app.use(cors(options))
    }

    middler(){
        this.enableCors()
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended : false }))
    }

    routes(){
        this.app.route('/v').get((req, res) => {
            res.send({ versao: '0.0.1'})
        })

        this.app.use('/api/v1/', Router)
    }
}

export default new App();