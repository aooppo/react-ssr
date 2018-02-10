import React from 'react'
import axios from 'axios'
import Container from '../layout/container'

const token = ''
/* eslint-disable */
export default class TestApi extends React.Component {
  getTopics() {
    axios.get('/api/topics')
      .then(resp => {
        console.log(resp.data)
      }).catch(err => {
        console.log(err)
      })
  }
  login() {
    axios.post('/api/user/login', {
      accesstoken: token
    }).then(resp => {
      console.log(resp)
    }).catch(err => {
        console.log(err)
    })
  }
  markAll() {
    axios.post('/api/message/mark_all?needAccessToken=true', {
      accesstoken: token
    }).then(resp => {
      console.log(resp.data)
    }).catch(err => {
        console.log(err)
    })
  }
  render() {
    return (
      <Container>
        <button onClick={this.getTopics}>Topics</button>
        <button onClick={this.login}> Login</button>
        <button onClick={this.markAll}> markAll</button>
      </Container>
      )
  }
}
/* eslint-enableble */
