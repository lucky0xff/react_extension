import React, { Component } from 'react'

export default class Parent extends Component {
  render() {
    return (
      <div>
        <h3>我是Parent组件</h3>
        <A render={(name)=>{return <B name={name}/>}}/>
      </div>
    )
  }
}

class A extends Component {
  state={name:'tom'}
  render() {
    const {name} = this.state
    return (
      <div>
        <h3>我是A组件</h3>
        {/* 预留一个位置 以后要放东西 */}
        {this.props.render(name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    console.log('B')
    return (
      <div>
        <h3>我是B组件  {this.props.name}</h3>
      </div>
    )
  }
}
