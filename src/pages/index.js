import React, { Component } from 'react'
import axios from 'axios'
export default class Index extends Component {
  componentDidMount() {
    axios.post('/cms/login',{}).then(res=>{
      console.log(res)
    })
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
