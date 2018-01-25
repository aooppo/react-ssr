import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { AppState } from '../../store/app-state'


@inject('appState')
@observer
export default class TopicList extends React.Component {
  constructor(props) {
    super(props)
    // do sth
    this.changeName = this.changeName.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.incrementFunc = this.incrementFunc.bind(this)
    this.decrementFunc = this.decrementFunc.bind(this)
  }

  componentWillMount() {
    // do sth
  }
  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }

  changeColor(e) {
    this.props.appState.changeColor(e.target.value)
  }
  decrementFunc() {
    this.props.appState.decrement()
  }

  incrementFunc() {
    this.props.appState.increment()
  }

  changeName(e) {
    this.props.appState.changeName(e.target.value)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>this is title test</title>
          <meta name="description" content="this is content.." />
        </Helmet>
        <input type="text" onChange={this.changeName} />
        <input type="text" onChange={this.changeColor} />
        <button onClick={this.incrementFunc} >increment </button>
        <button onClick={this.decrementFunc} >decrement </button>
        {this.props.appState.msg}  count is &nbsp;
        <span style={{ color: this.props.appState.color }}> {this.props.appState.count} </span>
      </div>
    )
  }
}
TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}
