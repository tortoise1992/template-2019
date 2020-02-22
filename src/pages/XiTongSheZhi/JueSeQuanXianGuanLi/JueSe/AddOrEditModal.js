import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';
// import { getAction, postAction } from '@/axios';

const FormItem = Form.Item;

//表单布局
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 17, style: { paddingLeft: '10px' } },
};

class AddOrEditModal extends Component {
    onOk = () => {
        this.props.form.validateFields(
            (err,values) => {
                if (!err) {
                    this.props.onOk();
                    // let { roleName, remark } = values;
                    // let data = {roleName, remark, sourceCode: 'pc'};
                    // let url = '/bigdata/system/role/save'; //新增时的角色保存接口
                    // if(this.state.editData){ //编辑角色时修改请求接口、添加角色id参数
                    //     url = '/bigdata/system/role/update';
                    //     data.id = this.state.editData.id
                    // }
                    // postAction(url, data, 0, 1).then(res=>{
                    //     if(res.success) {
                    //         message.success('保存成功！');
                    //         this.props.onOk();
                    //     } else {
                    //         message.error(res.obj);
                    //     }
                    // })
                }
            },
        );
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let { editData } = this.props;
        return (
            <Modal
                title={editData?'修改角色':'添加角色'}
                visible={true}
                onOk={this.onOk}
                onCancel={this.props.onCancel}
            >
                <FormItem {...formItemLayout} label="角色名称">
                    {getFieldDecorator('roleName', {
                        rules: [{
                            required: true,
                            message: '请输入角色名称(不超过8字)'
                        }],
                        initialValue: editData&&editData.roleName
                    })(
                        <Input placeholder="请输入角色名称(不超过8字)" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="角色描述">
                    {getFieldDecorator('remark', {
                        initialValue: editData&&editData.remark
                    })(
                        <Input.TextArea style={{resize:'none',height:60}} placeholder="请输入角色描述(不超过20字)"/>
                    )}
                </FormItem>
            </Modal>
        )
    }
}

export default Form.create()(AddOrEditModal);