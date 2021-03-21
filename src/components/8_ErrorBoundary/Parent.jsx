import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
  state={
    hasError:''
  }
  // 当Parent的子组件报错时 会触发getDrivedStateFromError的调用 并携带错误信息
  static getDrivedStateFromError(error){
    console.log(error)
    return {hasError:error}
  }

  // 统计错误次数 反馈给服务器 通知后端解决
  componentDidCatch(){
    console.log('统计错误次数 反馈给服务器 通知后端解决')
  }
  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError?<h2>当前网络不稳定稍后再试</h2>:<Child/>}
      </div>
    )
  }
}
