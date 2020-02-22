import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 19, style:{paddingLeft:'10px'}},
};

class EditModal extends Component {

    onOk = () => {
        this.props.form.validateFields(
            (err,values) => {
                if (!err) {
                    this.props.onOk();
                    // postAction('/bigdata/system/menu/update', {
                    //   name: values.name
                    // }, 0, 1).then(res=>{
                    //     if(res.success){
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

	render () {
        const { getFieldDecorator } = this.props.form;
        let { activeData } = this.props;
		return (
			<Modal
                title={'修改菜单'}
                visible={true}
                onOk={this.onOk}
                onCancel={this.props.onCancel}
            >
                <FormItem {...formItemLayout} label="名称">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: '请输入菜单名称'
                        }],
                        initialValue: activeData && activeData.name
                    })(
                        <Input placeholder="请输入菜单名称" />
                    )}
                </FormItem>
            </Modal>
		)
	}
}

export default Form.create()(EditModal);