const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('')
const middlewares = jsonServer.defaults()
const express = require('express')


// Heroku dynamically sets a port
const PORT = process.env.PORT || 3000

server.use('/api', middlewares, router)

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})

server.use(jsonServer.bodyParser)

server.get('/health', (req, res) => {
  res.send('ok')
})

server.use((req, res, next) => {
  next()
})

server.use(express.static('build'))