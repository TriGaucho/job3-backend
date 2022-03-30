import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'

import App from './app'
import * as Router from './routers'


const server = express()
const port = process.env.PORT || 8081

server.use(cors({ 
    origin: "*",
    credentials: true,
    methods: "GET, OPTIONS, POST, PUT"
  })
)

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use('/api', Router)

server.listen(port, () => {
  console.info(`Aplicação carregada na porta ${port}`)
})