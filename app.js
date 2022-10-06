const express = require('express')
const server = jsonsServer.create()
const router = jesonServer.router('')
const middlewares = jsonsServer.defaults()
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

server.use('/api', middlewares, router)

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})

server.get('/health', (req, res) => {
  res.send('ok')
})

server.use(jsonsServer.bodyParser)
server.use((req, res, next) => {
  next()
})

server.use(app.use(express.static('dist')))