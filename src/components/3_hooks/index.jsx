import { render } from '@testing-library/react'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//类式组件
/* class Demo extends Component {
  state={count:0}
  add=()=>{
    // this.setState((state)=>{return {count:state.count+1}})
    this.setState(state=>({count:state.count+1})) //简写
  }
  componentDidMount(){
    this.timer =setInterval(()=>{
      this.setState(state=>({count:state.count+1}))
    },1000)
  }
  unMount=()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  componentWillUnmount() {
    console.log(this)
    clearInterval(this.timer)
  }
  show=()=>{
    const {input1} = this
    console.log(input1.value)
    // alert(input1.current.value)
  }
  show2=(event)=>{
    console.log(event.target.value)
  }
  render() {
    return (
      <div>
        <input type='text' ref={c=>this.input1=c}></input>
        <h2>当前求和为：{this.state.count}</h2>
        <button onClick={this.add}>点我加一</button>
        <button onClick={this.unMount}>点我卸载组件</button>
        <button onClick={this.show}>点我提示数据</button>
        <input type='text' onChange={this.show2}></input>
      </div>
    )
  }
} */

// 函数式组件
function Demo() {
  // React.useState(state的初始值) 返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
  const [count,setCount] = React.useState(0)
  const myRef = React.useRef()

  function add() {
    // setCount(count+1)
    setCount((count)=>{return count+1})
  }

  // []表示监测组件挂载到页面时 [count]表示监测组件挂载到页面时+count发生变化时 什么都不加表示都监测
  React.useEffect(()=>{
    const timer =setInterval(()=>{
      setCount(count=>{return count+1})
    },1000)
    return()=>{// 在组件卸载前执行 相当于componentWillUnmount
      clearInterval(timer)
    }
  },[])
  function unMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  function show(){
    alert(myRef.current.value)
  }
  return (
    <div>
      <input type='text' ref={myRef}></input>
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>点我加一</button>
      <button onClick={unMount}>点我卸载组件</button>
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}
export default Demo