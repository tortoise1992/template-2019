import React, { Component } from 'react'
import {Layout} from 'antd'
import './index.less'
import SideMenu from './Menu'
import TopHeader from './Header'
const { Header, Content, Sider } = Layout;
export default class BasicLayout extends Component {
    state={
        collapsed:false
    }
    close = () => {
        this.setState({
          collapsed: true
        });
    };
    open=()=>{
        this.setState({
            collapsed: false
        });
    }
  render() {
    return (
        <Layout className='main-wrapper'>
            <Sider width={220} 
            style={{position: 'relative'}}
            trigger={null} collapsible collapsed={this.state.collapsed}
            >                
                <SideMenu></SideMenu>
            </Sider>      
           
            <Layout>
                <Header style={{backgroundColor:'#fff',padding:'0 20px'}}>
                    <TopHeader collapsed={this.state.collapsed} close={this.close} open={this.open}></TopHeader>
                </Header>
                <Content  style={{ padding: '20px'}}>
                    {this.props.children}
                    <div style={{height:20}}></div>
                </Content>              
            </Layout>
        </Layout>
    )
  }
}
