import React, { Component } from 'react'
import { Button } from 'antd'
export default class Actions extends Component {
    
   
    render() {
        
        return (
            <div className='margin_b_15' style={{display:'flex',justifyContent:'space-between'}}>
                {/* <div>
                    <Button onClick={this.props.handleAdd} type='primary' icon='setting' style={{marginRight:10}}>列表设置</Button>
                </div>                 */}
                <div>
                    <Button onClick={this.props.handleAdd} type='primary' icon='plus' style={{marginRight:10}}>新增</Button>
                    <Button onClick={this.props.refresh} type='primary' icon='sync' style={{marginRight:10}}>刷新</Button>
                   
                </div>                
            </div>
        )
    }
}
