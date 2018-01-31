import React from 'react'


class Hello extends React.Component {
  constructor() {
    super()
    // do sth
    this.sayHi.bind(this)
  }

  sayHi() {
    // console.log('hi')
    // do <sth className=""></sth>
    this.a = 1
  }

  render() {
    return (
      <div>
        <button onClick={this.sayHi()}>AA</button>
      </div>
    )
  }
}

export default Hello
