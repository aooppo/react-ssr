import React from 'react'
import {
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom'
import {
  inject,
  observer,
} from 'mobx-react'
import PropTypes from 'prop-types'

import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'
import TestApi from '../views/test/api-test'
import User from '../views/user'
import Infos from '../views/user/infos'
import CreateTopic from '../views/create-topic/index'

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => {
  // debugger // eslint-disable-line
  return (
    <Route
      {...rest}
      render={
        (props) => (
          isLogin ?
            <Component {...props} /> :
            <Redirect
              to={{
                pathname: '/login',
                search: `?from=${rest.path}`, // eslint-disable-line
              }}
            />
        )
      }
    />
  )
}

const InjectedPrivateRoute = withRouter(inject(({ appState }) => {// eslint-disable-line
  return {
    isLogin: appState.user.isLogin,
  }
})(observer(PrivateRoute)))

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  isLogin: PropTypes.bool,
}

PrivateRoute.defaultProps = {
  isLogin: false,
}

export default () => [
  <Route path="/" render={() => <Redirect to="/index" />} exact key="frist" />,
  <Route path="/index" component={TopicList} key="index" />,
  <Route path="/detail/:id" component={TopicDetail} key="detail" />,
  <Route path="/test" component={TestApi} key="test" />,
  <Route path="/login" component={User} key="login" />,
  <InjectedPrivateRoute path="/user/info" component={Infos} key="userInfo" />,
  <InjectedPrivateRoute path="/topic/create" component={CreateTopic} key="topicCreate" />,
]
