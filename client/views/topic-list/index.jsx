import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import { AppState } from '../../store/app-state'


@inject('appState') @observer
export default class TopicList extends React.Component {
  constructor(props) {
    super(props)
    // do sth
    this.changeName = this.changeName.bind(this)
  }

  componentWillMount() {
    // do sth
  }

  changeName(e) {
    this.props.appState.changeName(e.target.value)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeName} />
        {this.props.appState.msg}
      </div>
    )
  }
}
TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}
