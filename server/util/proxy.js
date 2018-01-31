const router = require('express').Router()
const axios = require('axios')
const querystring = require('query-string')


const baseUrl = 'https://cnodejs.org/api/v1'

module.exports = (req, res, next) => {
  const path = req.path
  const user = req.session.user || {}
  const needAccessToken = req.query.needAccessToken
  console.log(needAccessToken, user.accessToken)
  if (needAccessToken && !user.accessToken) {
    res.status(401).send({
      success: false,
      msg: 'need login'
    })
  }

  const query = Object.assign({}, req.query, {
    accesstoken: (needAccessToken && req.method === 'GET') ? user.accessToken : ''
  })
  if(query.needAccessToken) delete query.needAccessToken

  console.log(req.method)
  axios(`${baseUrl}${path}`, {
    method: req.method,
    params: req.query,
    data: querystring.stringify( Object.assign({}, req.body, {
      accesstoken: (needAccessToken && req.method === 'POST') ? user.accessToken : ''
    })),
    headers: {
      'Content-Type': 'application/x-wwww-form-urlencoded'
    }
  }).then(resp => {
    if (resp.status === 200) {
      console.log('prxy ... > '+resp.data)
      res.send(resp.data)
    }else {
      res.status(resp.status).send(resp.data)
    }
  }).catch(err => {
    if (err.response) {
      res.status(500).send(err.response.data)
    }else {
      res.status(500).send({
        success: false,
        msg: 'unknow error'
      })
    }
  })
}
