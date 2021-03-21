import React, { Component } from 'react'

export default class Child extends Component {
  state={
    /* users:[
      {id:'001',name:'tom',age:18},
      {id:'002',name:'jack',age:18},
      {id:'003',name:'jerry',age:18},
    ] */
    users:'abc'
  }
  render() {
    return (
      <div>
        <h2>我是Child组件</h2>
        {
          this.state.users.map(userObj=><h4 key={userObj.id}>{userObj.name}---{userObj.age}</h4>
          )
        }
      </div>
    )
  }
}
