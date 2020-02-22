import React, { Component } from 'react';
import { Modal, Form, Input, Select } from 'antd';
// import { getAction, postAction } from '@/axios';

const FormItem = Form.Item;
const Option = Select.Option;

//表单布局
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 17, style: { paddingLeft: '10px' } },
};

class AddOrEditModal extends Component {
    state = {
        roleLists: [],
    }

    componentDidMount(){
        this.getRoleLists();
    }

    getRoleLists(){
        let res = {"success":true,"msg":"成功","obj":[{"id":1,"roleName":"超级管理员","remark":"拥有权限管理模块的设置权限不包含菜单","createTime":1536549032000,"updateTime":1536550539000},{"id":31,"roleName":"学生","remark":"学生权限","createTime":1541034938000,"updateTime":1541034938000},{"id":33,"roleName":"校长","remark":"测试校","createTime":1542697696000,"updateTime":1542698189000},{"id":34,"roleName":"院系领导","remark":"","createTime":1543396029000,"updateTime":1544107599000},{"id":35,"roleName":"学工老师","remark":"","createTime":1544107460000,"updateTime":1544107517000},{"id":36,"roleName":"学生资助中心老师","remark":"","createTime":1544107539000,"updateTime":1544107539000},{"id":37,"roleName":"心理健康中心老师","remark":"","createTime":1544107561000,"updateTime":1544107561000},{"id":38,"roleName":"心理健康中心领导","remark":"","createTime":1574128717000,"updateTime":1574128717000},{"id":39,"roleName":"心理健康院系老师","remark":"","createTime":1574128739000,"updateTime":1574128739000}],"errorCode":null};
        this.setState({
            roleLists: (res.obj && res.obj[0] && res.obj.map(item => {
                return {
                    name: item.roleName,
                    value: item.id
                }
            })) || []
        })
        // getAction("/bigdata/system/role/list?sourceCode=pc").then((res)=>{
        //     if (res.success) {
        //         this.setState({
        //             roleLists: (res.obj && res.obj[0] && res.obj.map(item => {
        //                 return {
        //                     name: item.roleName,
        //                     value: item.id
        //                 }
        //             })) || []
        //         })
        //     }
        // })
    }

    onOk = () => {
        //表单验证
        this.props.form.validateFields(
            (err, values) => {
                if (!err) {
                    this.props.onOk();
                    // let { userName, name, sex, accountCode, roleId } = values;
                    // let reqUrl = "/bigdata/system/user/save";
                    // let data = {
                    //     sourceCode: "pc", // 调用端：(默认PC)
                    //     userName, // 账户名 string
                    //     name, // 姓名 string
                    //     sex: sex - 0, // 性别 num init ， state中存储的是string类型， 这里简单转换一下
                    //     accountCode, // 学号/教工号 string
                    //     roleId:roleId - 0, // 用户角色 num init ， state中存储的是string类型， 这里简单转换一下
                    // }
                    // if (this.props.editData) {
                    //     reqUrl = "/bigdata/system/user/update";
                    //     data.id = this.props.editData.id;
                    // }
                    // postAction(reqUrl, data, 0, 1).then((res) => {
                    //     if (res.success) {
                    //         message.success("保存成功！！！");
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
        let { roleLists } = this.state;
        let roleId;
        if (editData) {
            roleLists.forEach((item) => {
                if (item.name === editData.roles) {
                    roleId = item.value
                }
            });
        }

        return (
            <Modal
                title={editData?'编辑用户':'新增用户'}
                visible={true}
                onOk={this.onOk}
                onCancel={this.props.onCancel}
            >
                <FormItem {...formItemLayout} label="账户名称">
                    {getFieldDecorator('userName', {
                        rules: [{
                            required: true,
                            message: '请输入账户名称'
                        }],
                        initialValue: editData && editData.username
                    })(
                        <Input placeholder="请输入账户名称" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="姓名">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: '请输入姓名'
                        }],
                        initialValue: editData && editData.name
                    })(
                        <Input placeholder="请输入姓名" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="性别">
                    {getFieldDecorator('sex', {
                        rules: [{
                            required: true,
                            message: '请输入性别'
                        }],
                        initialValue: editData && editData.sex
                    })(
                        <Select placeholder="请选择性别" style={{ width: "100%" }}>
                            <Option value={1}>男</Option>
                            <Option value={2}>女</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="学号/教工号">
                    {getFieldDecorator('accountCode', {
                        rules: [{
                            required: true,
                            message: '请输入学号/教工号'
                        }],
                        initialValue: editData && editData.accountCode
                    })(
                        <Input placeholder="请输入学号/教工号" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="用户角色">
                    {getFieldDecorator('roleId', {
                        rules: [{
                            required: true,
                            message: '请选择用户角色'
                        }],
                        initialValue: roleId
                    })(
                        <Select placeholder="请选择用户角色" style={{ width: "100%", marginBottom: 8 }} onChange={this.roleIdChange}>
                            {
                                roleLists && roleLists[0] && roleLists.map((item, index) => {
                                    return (
                                        <Option value={item.value} key={index}>{item.name}</Option>
                                    )
                                })
                            }
                        </Select>
                    )}
                </FormItem>
            </Modal>
        )
    }
}

export default Form.create()(AddOrEditModal);