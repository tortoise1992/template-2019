import React, { Component } from 'react'
import { Modal, Checkbox,message } from 'antd'
const CheckboxGroup = Checkbox.Group;
export default class SelectModal extends Component {
    state = {
        plainOptions: ['栏目管理', '内容管理', '回收站','广告管理','插件应用','网站信息','SEO设置'],
        checkedList: [],
        indeterminate: false,
        checkAll: false
    }
    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < this.state.plainOptions.length,
            checkAll: checkedList.length === this.state.plainOptions.length,
        });
    }

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? this.state.plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }
    handleOk=()=>{
        message.info(`配置成功，参数是${JSON.stringify(this.state.checkedList)}`)
        this.props.handleOk()
    }
    render() {
        return (
            <Modal
                title='快捷导航管理'
                visible={this.props.visible}
                okText='保存'
                cancelText='取消'
                closable={false}
                width={600}
                onCancel={this.props.handleCancel}
                onOk={this.handleOk}
            >
                <div>
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >
                        全选
                    </Checkbox>
                </div>
                <br />
                <CheckboxGroup
                    options={this.state.plainOptions}
                    value={this.state.checkedList}
                    onChange={this.onChange}
                />
            </Modal>
        )
    }
}
