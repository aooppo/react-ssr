import {
  observable,
  // computed,
  // autorun,
  // action,
  toJS,
} from 'mobx'

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

  toJson() {
    return {
      user: toJS(this.user),
    }
  }
}

// const appState = new AppState()

// export default appState
