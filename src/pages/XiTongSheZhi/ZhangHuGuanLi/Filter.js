import React from 'react';
import { Input, Select, Button } from 'antd';
// import { getAction} from '@/axios';
const Option = Select.Option;

export default class Filter extends React.Component {
    state = {
        username: "", // 账户
        name: "", // 名称
        code: "", // 学号/教工号
        role:"", // 账户角色
        roleLists: [], // 账户角色下拉
    }
	
	
	componentDidMount(){
        this.getRoleLists();
        this.handleSearch();
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

    handleChangeInput(type, e){
        if(type === 0){
            this.setState({username: e.target.value})
        }else if(type === 1){
            this.setState({name: e.target.value})
        }else if(type === 2){
            this.setState({code: e.target.value})
        }
    }

    handleChangeSelect = (value) => {
        this.setState({role: value})
    }

    handleSearch = () => {
        let filterValue = {
            sourceCode: 'pc',
    		username : this.state.username,
    		name: this.state.name,
    		accountCode: this.state.code,
            roleId: this.state.role,
    	}
    	
    	this.props.getFilterValue(filterValue);
    }
	
	render () {
        let { username, name, code, role, roleLists} = this.state;
		return (
			<div style={{display: 'flex', paddingBottom: 20, lineHeight: '40px'}}>
				<div style={{marginRight: 10}}>
                    <span>账户：</span>
                    <Input 
                        value={username} 
                        onChange={this.handleChangeInput.bind(this, 0)} 
                        placeholder="请输入账户名称"
                        style={{width: 130}} 
                    />
                </div>
				
				<div style={{marginRight: 10}}>
                    <span>姓名：</span>
                    <Input 
                        value={name} 
                        onChange={this.handleChangeInput.bind(this, 1)} 
                        placeholder="请输入姓名"
                        style={{width: 130}} 
                    />
                </div>
				
				<div style={{marginRight: 10}}>
                    <span>学号/教工号：</span>
                    <Input 
                        value={code} 
                        onChange={this.handleChangeInput.bind(this, 2)} 
                        placeholder="请输入学号/教工号"
                        style={{width: 150}} 
                    />
                </div>
				
				<div style={{marginRight: 10}}>
                    <span>账户角色：</span>
                    <Select placeholder='请选择账户角色' style={{ width: 150 }} onChange={this.handleChangeSelect} value={role}>
                        <option value="">全部角色</option>
                        {
                            roleLists && roleLists[0] && roleLists.map((item, index)=>(
                                <Option value={item.value} key={index}>{item.name}</Option>
                            ))
                        }
                    </Select>
                </div>
				
				<Button type="primary" onClick={this.handleSearch} style={{margin: '4px 10px 0 0'}}>搜索</Button>
				<Button type="primary" icon="plus" style={{marginTop: 4}} onClick={this.props.addUser}>创建新用户</Button>
			</div>
		)
	}
}
