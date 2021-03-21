import React, { Component } from 'react'

// 创建Context对象
const UserNameContext = React.createContext()
const {Provider,Consumer} = UserNameContext
export default class A extends Component {
  state={username:'tom',age:'18'}
  render() {
    const {username,age} = this.state
    return (
      <div>
        <h3>我是A组件</h3>
        <h4>我的用户名是：{username}</h4>
        {/*用了Provider B、C都能接收到了  username:username,age:age可以简写的*/}
        <Provider value={{username:username,age:age}}>
          <B/>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h3>我是B组件</h3>
        <h4>我接收到的用户名是：{this.props.username}</h4>
        <C/>
      </div>
    )
  }
}

//类式组件C
// context主要用户祖组件与后代组件间通信
/* class C extends Component {
  // 必需声明接收context
  static contextType = UserNameContext
  render() {
    return (
      <div>
        <h3>我是C组件</h3>
        <h4>我接收到的用户名是：{this.context.username}，年龄是：{this.context.age}</h4>
      </div>
    )
  }
} */

//函数组件C
function C(){
  return (
    <div>
      <h3>我是C组件</h3>
      <h4>我接收到的用户名是：
      <Consumer>
        {
          value=>{
            return `${value.username}，年龄是：${value.age}`
          }
        }
      </Consumer>
      </h4>
    </div>
  )
}