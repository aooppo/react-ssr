const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const session = require('express-session')
const serverRender = require('./util/server-render')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
  maxAge: 10 * 60 * 1000,
  name: 'tid',
  resave: false,
  saveUninitialized: false,
  secret: 'react cnode class'
}))

const isDev = process.env.NODE_ENV === 'development'

app.use('/api/user', require('./util/handle-login'))
app.use('/api', require('./util/proxy'))

app.use(favicon(path.join(__dirname, '../favicon.ico')))

if (!isDev) {
  const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf8')
  const serverEntry = require('../dist/server-entry')
  app.use('/public', express.static(path.join(__dirname, '../dist')))
  app.get('*', (req, res, next) => {
    serverRender(serverEntry, template, req, res).catch(next)
  })
} else {
  const devStatic = require('./util/dev-static')
  devStatic(app)
}

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send(err)
})

app.listen(3333, () => {
  console.log('server run on http://localhost:3333')
})
