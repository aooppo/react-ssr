const express = require('express')
const ReactSSR = require('react-dom/server')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const session = require('express-session')
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

if(!isDev) {
	const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
	const serverEntry = require('../dist/server-entry').default
	app.use('/public', express.static(path.join(__dirname, '../dist')))
	app.get('*', (req, res)=> {
		let appString = ReactSSR.renderToString(serverEntry)
		res.send(template.replace('<!-- app -->', appString))
	})
}else {
	const devStatic = require('./util/dev-static')
	devStatic(app)
}

app.listen(3333, () => {
	console.log('server run on http://localhost:3333');
})
