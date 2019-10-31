import React, { Component } from 'react'
import { Button,Radio } from 'antd'
export default class Actions extends Component {
    render() {
        return (
            <div className='actions'>
                <Radio.Group>
                    <Radio.Button value="current">视图</Radio.Button>
                    <Radio.Button value="preview">预览</Radio.Button>
                </Radio.Group>

                <div style={{float:'right'}}>
                    <Button icon='sync' type='primary' style={{marginRight:10}}>
                        重置
                    </Button>
                    <Button icon='save' type='primary' style={{marginRight:10}}>
                        保存
                    </Button>
                    <Button icon='table' type='primary'>
                        JSON
                    </Button>
                </div>
            </div>
        )
    }
}
