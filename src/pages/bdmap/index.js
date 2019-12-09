import React, { Component,Fragment } from 'react'
import {Card} from 'antd'
import Address from './components/Address'
// import Naddress from './components/Naddress'
export default class BdMap extends Component {
  render() {
    return (
      <Fragment>
        <Card title='地址解析（根据地址解析出对应的经纬度）'>
          <Address></Address>
        </Card>
        {/* <Card title='逆地址解析（根据经纬度解析出对应的地址）' style={{marginTop:20}}>
          <Naddress></Naddress>
        </Card> */}
      </Fragment>      
    )
  }
}
