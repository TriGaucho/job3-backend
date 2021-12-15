import * as express from 'express'
import * as cors from 'cors'

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

server.use('/', Router)

server.listen(port, () => {
  console.info(`Aplicação carregada na porta ${port}`)
})