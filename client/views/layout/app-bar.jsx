import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

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

class MainAppBar extends React.Component {
  constructor(props) {
    super(props)
    this.onHomeIconClick = this.onHomeIconClick.bind(this)
    this.createButtonClick = this.createButtonClick.bind(this)
    this.loginButtonClick = this.loginButtonClick.bind(this)
  }
  /* eslint-disable*/
  onHomeIconClick() {

  }

  createButtonClick() {

  }

  loginButtonClick() {

  }
  /* eslint-enable  */

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <ToolBar>
            <IconButton color="secondary" onClick={this.onHomeIconClick}>
              <HomeIcon color="action" />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              JNode
            </Typography>
            <Button raised color="secondary" onClick={this.createButtonClick}>
              新建话题
            </Button>
            <Button color="inherit" onClick={this.loginButtonClick}>
              登陆
            </Button>
          </ToolBar>
        </AppBar>
      </div>
    )
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainAppBar)
