import React, { Component } from 'react'
import { Result,Button } from 'antd'
import {withRouter} from 'react-router-dom'
class Index extends Component {
    handleBack=()=>{
        this.props.history.replace('/admin/home')
    }
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="抱歉，您访问的页面不存在。"
                extra={<Button type="primary" onClick={this.handleBack}>返回首页</Button>}
            />
        )
    }
}
export default withRouter(Index)
