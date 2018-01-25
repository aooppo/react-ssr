import React from 'react'
import axios from 'axios'
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
      accesstoken: 'ef35af2e-95b4-4062-badc-419d3b7471c4'
    }).then(resp => {
      console.log(resp)
    }).catch(err => {
        console.log(err)
    })
  }
  markAll() {
    axios.post('/api/message/mark_all?needAccessToken=true', {
      accesstoken: 'ef35af2e-95b4-4062-badc-419d3b7471c4'
    }).then(resp => {
      console.log(resp.data)
    }).catch(err => {
        console.log(err)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getTopics}>Topics</button>
        <button onClick={this.login}> Login</button>
        <button onClick={this.markAll}> markAll</button>
      </div>
      )
  }
}
/* eslint-enableble */
