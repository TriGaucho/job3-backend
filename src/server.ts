import App from './app'

const port = process.env.PORT || 8081

App.app.listen(port, function(){
  console.log(`Servidor executando na porta ${port}`)
})
