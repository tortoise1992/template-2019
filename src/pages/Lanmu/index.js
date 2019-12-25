import React, { Component } from 'react'
import { Card, Button, Menu, Icon, Dropdown } from 'antd'
import withRouter from 'umi/withRouter'
class Lanmu extends Component {
    handleMenuClick = () => {

    }
    render() {
        let menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">
                    增加顶级栏目
                </Menu.Item>
                <Menu.Item key="2">
                    批量增加栏目
                </Menu.Item>
                
            </Menu>
        )
        return (
            <Card title='栏目列表'
                extra={
                    <Dropdown overlay={menu}>
                        <Button>
                            栏目管理 <Icon type="down" />
                        </Button>
                    </Dropdown>
                }>
                栏目
            </Card>
        )
    }
}

export default withRouter(Lanmu)
