import axios from 'axios'
import {
  observable,
  // computed,
  // autorun,
  action,
  toJS,
} from 'mobx'

let notifyId = 0
export default class AppState {
  @observable user = {
    isLogin: false,
    info: {},
    detail: {
      syncing: false,
      recent_topics: [],
      recent_replies: [],
    },
    collections: {
      syncing: false,
      list: [],
    },
  }

  @observable activeNotifications = []

  @action login(accesstoken) {
    return new Promise((resolve, reject) => {
      axios.post('/api/user/login', {
        accesstoken,
      }).then((resp) => {
        if (resp.status === 200 && resp.data.success) {
          this.user.info = resp.data.data
          this.user.isLogin = true
          resolve()
        } else {
          reject(resp.data.msg)
        }
      }).catch((err) => {
        if (err.response) {
          reject(err.response.data.msg)
          // this.notify({ message: err.response.data.msg })
        } else {
          reject(err.message)
          // this.notify({ message: err.message })
        }
      })
    })
  }

  @action notify(config) {
    config.id = notifyId
    notifyId += 1
    this.activeNotifications.push(config)
  }

  @action closeNotify(notify) {
    this.activeNotifications.splice(this.activeNotifications.indexOf(notify), 1)
    this.notifications.push(notify)
  }

  toJson() {
    return {
      user: toJS(this.user),
    }
  }
}

// const appState = new AppState()

// export default appState
