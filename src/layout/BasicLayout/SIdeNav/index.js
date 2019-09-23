import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
import styles from './index.module.less'
const SubMenu=Menu.SubMenu
export default class SideNav extends Component {
    state={
        menu:[]
    }
    componentDidMount = () => {
        console.log(111)

        if(localStorage.getItem('userInfo')){
            let menu=JSON.parse(localStorage.getItem('userInfo')).menu
            this.setState({
                menu
            })
        }
    }
    renderMenu=(menus)=>{
        return menus.map(item=>{
            if(item.children && item.children.length>0){
                return (          
                    <SubMenu key={item.title} title={<span><Icon type={item.icon} />{item.title}</span>}>
                        {this.renderMenu(item.children)}
                    </SubMenu>)
            }else{
                return (<Menu.Item key={item.url}>
                        <Link to={item.url}><Icon type={item.icon} />{item.title}</Link> 
                    </Menu.Item>)
            }
        })
    }
    render() {
        return (
            <div className={styles.menu}>
                <Menu theme="dark" mode="inline">
                    {this.renderMenu(this.state.menu)}
                </Menu>
            </div>
            
        )
    }
}
