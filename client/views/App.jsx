import React from 'react'
import Routes from '../config/router'
import AppBar from './layout/app-bar'

export default class App extends React.Component {
  componentDidMount() {
    // do sth
  }

  render() {
    return [
      <AppBar key="appbar" />,
      <Routes key="routes" />,

    ]
  }
}
