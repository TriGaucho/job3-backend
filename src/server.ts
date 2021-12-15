import App from './app'
import * as express from 'express'
import * as Router from './routers'

const server = express()
server.use('/', Router)
const port = process.env.PORT || 8081

server.listen(port, () => {
  console.info(`Aplicação carregada na porta ${port}`)
})