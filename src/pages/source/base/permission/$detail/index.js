/**
 *
 * Routes:
 *   - ./src/routes/PrivateRoute.js 
 */
import React, { Component } from 'react'
import withRouter from 'umi/withRouter'
import { Radio,Card } from 'antd'
class Detail extends Component {
    state={
        currentId:0
    }
    componentDidMount() {
        if(this.props.match.params.detail){
            this.setState({
                currentId:this.props.match.params.detail
            })
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div style={{textAlign:'center',marginBottom:10}}>
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">用户信息</Radio.Button>
                        <Radio.Button value="b">操作权限</Radio.Button>
                        <Radio.Button value="c">数据权限</Radio.Button>
                    </Radio.Group>
                </div>
                <Card>

                </Card>
            </React.Fragment>           
            
        )
    }
}

export default withRouter(Detail)