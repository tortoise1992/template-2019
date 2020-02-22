import React, { Component } from 'react'
import { Layout } from 'antd';
import Nav from './Nav'
import PageHeader from './Header'
import PageFooter from './Footer'
import styles from './index.module.less'
// import Logo from './logo.png'
const { Header, Sider, Content } = Layout;
class SiderDemo extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {collapsed}=this.state
        return (
            <Layout className={styles.container}>
                <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
                    <div style={{height:64,textAlign:'center'}}>
                        {
                            !collapsed && <span style={{color:'#fff',lineHeight:'64px'}}>
                                大数据后台管理系统
                            </span>
                        }
                    </div>
                        {/* <img src={Logo} alt='' />
                        <span color='#fff'>
                            后台管理系统
                        </span> */}
                    <Nav/>               
                </Sider>
                <Layout>
                    <Header
                        className={styles.header}
                    >
                        <PageHeader collapsed={collapsed} toggle={this.toggle}/>
                    </Header>
                    <Content
                        className={styles.content}                        
                    >
                        {this.props.children}
                    </Content>
                    <PageFooter/>
                </Layout>
            </Layout>
        );
    }
}
export default SiderDemo