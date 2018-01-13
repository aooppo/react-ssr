const express = require('express')
const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server-entry').default
const app = express()
const fs = require('fs')
const path = require('path')
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
app.use('/public', express.static(path.join(__dirname, '../dist')))

app.get('*', (req, res)=> {
	let appString = ReactSSR.renderToString(serverEntry)
	res.send(template.replace('<!-- app -->', appString))
})

app.listen(3333, () => {
	console.log('server run on 3333');
})