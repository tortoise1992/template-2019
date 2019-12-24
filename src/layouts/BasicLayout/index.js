import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import './index.less'
const { Header, Sider, Content } = Layout;

class BasicLayout extends React.Component {
	state = {
		collapsed: false,
		menus:[]
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout style={{width:'100vw',height:'100vh'}}>
				<Sider  style={{width:'100%',height:'100%',overflow:'auto'}} trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span>nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span>nav 3</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout style={{width:'100%',height:'100%'}}>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon
							className="trigger"
							style={{
								display:'inline-block',
								height:64,
								width:64,
								cursor:'pointer'
							}}
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
					</Header>
					<Content
						style={{
							padding: 15,
							background: '#f5f5f5',
							minHeight: 280,
							overflow:'auto'
						}}
					>
						Content
          			</Content>
				</Layout>
			</Layout>
		);
	}
}
export default BasicLayout