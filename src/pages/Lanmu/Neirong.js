import React, { Component } from 'react'
import { Form,Tabs } from 'antd'
const { TabPane } = Tabs
class Neirong extends Component {
    render() {
        return (
            <Form>
                <Tabs>
                    <TabPane tab="常规选项" key="1">

                    </TabPane>
                    <TabPane tab="高级选项" key="2">

                    </TabPane>                    
                </Tabs>
            </Form>
        )
    }
}

export default Form.create()(Neirong)
