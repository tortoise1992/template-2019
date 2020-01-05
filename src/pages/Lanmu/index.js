import React, { Component } from 'react'
import { Card, Button,Row,Col} from 'antd'
import withRouter from 'umi/withRouter'
import List from './List'
import DrawerForm from './DrawerForm'
class Lanmu extends Component {
    state={
        visible:false
    }
    handleAdd=()=>{
        this.setState({
            visible:true
        })
    }
    handleClose=()=>{
        this.setState({
            visible:false
        })
    }
    render() {
        
        return (
            <Card title='栏目列表'>
                <div style={{marginBottom:15}}>
                    <Button onClick={this.handleAdd} type='primary'>新增顶级栏目</Button>
                </div>
                <Row gutter={10}>
                    <Col span={24}>
                        <List/>
                    </Col>                    
                </Row>
                {
                    this.state.visible && <DrawerForm visible={this.state.visible} handleClose={this.handleClose}/>
                }
                
            </Card>
        )
    }
}

export default withRouter(Lanmu)
