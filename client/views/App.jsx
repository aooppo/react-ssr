import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../config/router'

export default class App extends React.Component {
  componentDidMount() {
    // do sth
  }

  render() {
    return [
      <div key="index">
        <Link to="/detail"> detail page </Link>
        <br />
        <Link to="/list"> list page </Link>
      </div>,
      <Routes key="routes" />,

    ]
  }
}
