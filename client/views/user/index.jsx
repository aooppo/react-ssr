import React from 'react'
// import PropTypes from 'prop-types'
// import marked from 'marked'
// import Helmet from 'react-helmet'

// import Paper from 'material-ui/Paper'

import Container from '../layout/container'

export default class UserLogin extends React.Component {
  constructor() {
    super()
    // do sth
    this.state = {
      isLogin: false,
    }
  }

  render() {
    return (
      <Container>
        {
          this.state.isLogin
            ? '已登录' :
            <div>
              user access token  <input type="text" />
              <button>登陆</button>
            </div>
        }
      </Container>
    )
  }
}
