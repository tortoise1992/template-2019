import React from 'react'
import { Layout, Menu, Icon,Modal } from 'antd';
import './index.less'
import {getLocal,clearLocal} from '../../util'
import Link from 'umi/link'
const { Header, Sider, Content } = Layout;

class BasicLayout extends React.Component {
	state = {
		collapsed: false,
		menus:[],
		username:''
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	componentDidMount() {
		let user=getLocal('userInfo')
		if(user){
			this.setState({
				username:user.name,
				menus:user.menus
			})
		}
	}
	handleLogout=()=>{
		Modal.confirm({
			title:'退出',
			content:'确定退出吗？',
			okText:'确定',
			cancelText:'取消',
			onOk:()=>{
				clearLocal()
				window.location.href=window.location.origin
			}
		})
	}
	renderMenus=(data)=>{
		return data.map((item,index)=>{
			if(item.children && item.children.length>0){
				return <Menu.SubMenu
					key={item.url}
					title={
						<span>
							{
							item.icon && item.icon !== '' && <Icon type={item.icon} />
							}
							<span>{item.title}</span>
						</span>
					}
				>
					{
						this.renderMenus(item.children)
					}
				</Menu.SubMenu>
				
			}else{
				return <Menu.Item key={item.url}>
					<Link to={item.url}>
						{
							item.icon && item.icon !== '' && <Icon type={item.icon} />
						}					
						<span>{item.title}</span>
					</Link>
					
				</Menu.Item>
			}
		})
	}
	render() {
		return (
			<Layout style={{width:'100vw',height:'100vh'}}>
				<Sider  style={{width:'100%',height:'100%',overflow:'auto'}} trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline">
						{this.renderMenus(this.state.menus)}
					</Menu>
				</Sider>
				<Layout style={{width:'100%',height:'100%'}}>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon
							className="trigger"							
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>

						<span className='logout-block' onClick={this.handleLogout}>
							{this.state.username}
							<Icon type="poweroff" className='logout' />
						</span>
					</Header>
					<Content
						style={{
							padding: 15,
							background: '#f5f5f5',
							minHeight: 280,
							overflow:'auto'
						}}
					>
						{this.props.children}
          			</Content>
				</Layout>
			</Layout>
		);
	}
}
export default BasicLayout