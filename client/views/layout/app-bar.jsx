import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import {
  inject,
  observer,
} from 'mobx-react'

import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import SvgIcon from 'material-ui/SvgIcon'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
}

const HomeIcon = props => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
)

@inject((stores) => {
  return {
    user: stores.appState.user,
  }
}) @observer
class MainAppBar extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.onHomeIconClick = this.onHomeIconClick.bind(this)
    this.createButtonClick = this.createButtonClick.bind(this)
    this.loginButtonClick = this.loginButtonClick.bind(this)
  }

  onHomeIconClick() {
    this.context.router.history.push({
      pathname: '/index',
      search: '?tab=all',
    })
  }
  /* eslint-disable*/
  createButtonClick() {

  }
  /* eslint-enable  */
  loginButtonClick() {
    this.context.router.history.push({
      pathname: '/login',
      // search: '?tab=all',
    })
  }

  render() {
    const {
      classes,
      user,
    } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <ToolBar>
            <IconButton color="primary" onClick={this.onHomeIconClick}>
              <HomeIcon color="action" />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              React Node
            </Typography>
            {
              user.isLogin ?
                <Button raised color="secondary" onClick={this.goToCreate}>
                  新建话题
                </Button> :
                null
            }
            <Button color="inherit" onClick={this.loginButtonClick}>
              {
                user.isLogin ? user.info.loginname : '登录'
              }
            </Button>
          </ToolBar>
        </AppBar>
      </div>
    )
  }
}

MainAppBar.wrappedComponent.propTypes = {
  user: PropTypes.object.isRequired,
}


MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainAppBar)
