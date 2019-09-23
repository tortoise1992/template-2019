import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import styles from './index.module.less'
import {withRouter} from 'react-router-dom'
const SubMenu=Menu.SubMenu
class SideNav extends Component {
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
                    <SubMenu key={item.url} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                        {this.renderMenu(item.children)}
                    </SubMenu>)
            }else{
                return (<Menu.Item key={item.url}>
                        <Icon type={item.icon} /><span>{item.title}</span>
                    </Menu.Item>)
            }
        })
    }
    handleClick=({tem,key})=>{
        this.props.history.push(key)
    }
    render() {
        return (
            <div className={styles.menu}>
                <Menu theme="dark" mode="inline" onClick={this.handleClick}>
                    {this.renderMenu(this.state.menu)}
                </Menu>
            </div>
            
        )
    }
}
export default  withRouter(SideNav)