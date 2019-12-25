import React, { Component,Fragment } from 'react'
import { Card, Row,Col,Icon } from 'antd'
import withRouter from 'umi/withRouter'
import SelectModal from './SelectModal'
class KuaiJie extends Component {
    state={
        list:[],
        visible:false
    }
    handleCancel=()=>{
        this.setState({
            visible:false
        })
    }
    handleOk=()=>{
        this.setState({
            visible:false
        })
    }
    handleSet=()=>{
        this.setState({
            visible:true
        })
    }
    componentDidMount() {
        this.getData()
    }
    getData=()=>{
        let data=[{
            title:'URL配置',
            url:''
        },{
            title:'频道模型',
            url:''
        },{
            title:'回收站',
            url:''
        },{
            title:'模板管理',
            url:''
        },{
            title:'水印配置',
            url:''
        },{
            title:'邮件配置',
            url:''
        }]
        this.setState({
            list:data
        })
    }
    render() {
        return (
            <Card 
                title={<Fragment><span>快捷导航</span></Fragment>}
                bordered={false}
            >
                <Row gutter={10}>
                    {
                        this.state.list.map((item,index)=>{
                            return <Col span={6} key={index} style={{marginBottom:10}}>
                                <div
                                    style={{height:50,backgroundColor:'#f8f8f8',textAlign:'center',lineHeight:'50px',cursor:'pointer'}}
                                    onClick={()=>{
                                        this.props.history.push(item.url)
                                    }}
                                >
                                    {item.title}
                                </div>
                                
                            </Col>
                        })
                    }
                    <Col span={6} style={{marginBottom:10}}>
                        <div
                            style={{height:50,backgroundColor:'#f8f8f8',textAlign:'center',lineHeight:'50px',cursor:'pointer'}}
                            onClick={this.handleSet}
                        >
                            <Icon type='plus' style={{fontSize:18,fontWeight:'bold'}}/>
                        </div>
                        
                    </Col>
                </Row>
                {
                    this.state.visible && <SelectModal
                        visible={this.state.visible}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                }
                
            </Card>
        )
    }
}
export default withRouter(KuaiJie)