import {
  observable,
  computed,
  // autorun,
  action,
} from 'mobx'

export default class AppState {
  constructor({ count, name } = { count: 0, name: 'Jokcy2' }) {
    this.count = count
    this.name = name
  }
  @observable count
  @observable name
  @observable color = 'red'

  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }
  @action add() {
    this.count += 1
  }
  @action changeName(name) {
    this.name = name
  }

  @action increment() {
    this.count += 1
  }

  @action decrement() {
    this.count -= 1
  }
  @action changeColor(color) {
    this.color = color
  }
  toJson() {
    return {
      count: this.count,
      name: this.name,
    }
  }
}

// const appState = new AppState()

// export default appState
