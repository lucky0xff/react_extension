import React, { PureComponent } from 'react'

// PureComponent 
export default class Parent extends PureComponent {
  state = {carName:'MINI'}
  change=()=>{
    this.setState({carName:'奔驰c63'})
  }
  render() {
    return (
      <div>
        <h3>我是Parent组件</h3>
        <span>我的车的名字是：{this.state.carName}</span> <br/>
        <button onClick={this.change}>换车</button>
        <Child carName={this.state.carName}/>
      </div>
    )
  }
}

class Child extends PureComponent {
  render() {
    return (
      <div>
        <h3>我是Child组件</h3>
        <span>我接受的车的名字是：{this.props.carName}</span> <br/>
      </div>
    )
  }
}
