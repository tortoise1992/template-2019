import React, { Component } from 'react'
import { Row,Col } from 'antd'
import BlockItem from './item'
export default class Blocks extends Component {
    state={
        data:[{
            title:'文章数量',
            count:300
        },{
            title:'用户数量',
            count:300
        },{
            title:'访问数量',
            count:300
        },{
            title:'留言数量',
            count:300
        }]
    }
    componentDidMount() {
        
    }
    
    render() {
        return (
            <Row gutter={20}>
                {
                    this.state.data.map((item,index)=><Col span={6} key={index}><BlockItem data={item} index={index}></BlockItem></Col>)
                }
                
            </Row>
            
        )
    }
}
