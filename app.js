const express = require('express')
const server = jsonServer.create()
const router = jsonServer.router('')
const middlewares = jsonServer.defaults()
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
  if (req.method === 'POST') {
    req.body.created = Date.now()
  }
  next()
})

server.use(app.use(express.static('build')))