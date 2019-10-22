import React, { Component } from 'react'
import { Card, Select,Row,Col } from 'antd'
import History from './History'
import Preview from './Preview'
import Prop from './Prop'
const Option=Select.Option
export default class Index extends Component {
    state={
        list:[
            {
                type:'table',
                title:'表格'
            },
            {
                type:'modal',
                title:'弹框'
            },
            {
                type:'tree',
                title:'树'
            },
            {
                type:'search',
                title:'筛选条件'
            }
        ]
    }
    render() {
        return (
            <Card title='常规组件生成器' extra={
            <Select 
                style={{width:180}}
                placeholder='请选择组件类型'
            >
                {
                    this.state.list.map((item,index)=><Option key={index} value={item.type}>{item.title}</Option>)
                }
            </Select>}>
                <Row gutter={10}>
                    <Col span={16}>
                        <Preview/>
                    </Col>
                    <Col span={8}>
                        <Prop/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <History/>
                    </Col>                    
                </Row>
            </Card>
        )
    }
}
