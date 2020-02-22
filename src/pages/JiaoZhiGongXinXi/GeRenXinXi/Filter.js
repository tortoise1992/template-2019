import React, { Component } from 'react'
import {Select, Input, Button} from 'antd';
// import {postAction} from "src/axios";
const Option = Select.Option;

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 学年
            schoolYear:'',
            schoolYearLists:[],
            // 部门
            department:'',
            departmentLists:[],
            // 职称
            title:'',
            titleLists:[],
            // 学历
            education:'',
            educationLists:[],
            
            jobNumber:'',
            name:'',
        };
    }
    componentDidMount(){
        this.getSchoolYearLists();
        this.getDepartmentLists();
        this.getTitleLists();
        this.getEducationLists();

    }
    // 获取学年list
    getSchoolYearLists() {
        this.setState({
            schoolYearLists: [
                {name: '2019学年', value: '2019'},
                {name: '2018学年', value: '2018'},
                {name: '2017学年', value: '2017'},
            ]
        })
        // postAction(
    	// 	"/bigdata/school/listClassByMajor",
    	// 	{
    	// 		year: this.state.curGrade,
    	// 		majorCode: this.state.curMajor
    	// 	}
    	// ).then(
    	// 	(res) => {
    	// 		if (res.success){
    	// 			this.setState({
    	// 				classLists: res.obj,
    	// 			})
    	// 		}
    	// 	}
    	// )
    }
    // 获取部门list
    getDepartmentLists() {
        this.setState({
            departmentLists: [
                {name: '部门1', value: '1'},
                {name: '部门2', value: '2'},
            ]
        })
    }
    // 获取职称list
    getTitleLists() {
        this.setState({
            titleLists: [
                {name: '职称1', value: '1'},
                {name: '职称2', value: '2'},
            ]
        })
    }
    // 获取学历list
    getEducationLists() {
        this.setState({
            educationLists: [
                {name: '学历1', value: '1'},
                {name: '学历2', value: '2'},
            ]
        })
    }

    changeFilter = (num,value)=>{
        if(num===0){//变更学年
            this.setState({
                schoolYear:value
            })
        }else if(num === 1){
            this.setState({
                department:value
            })
        }else if(num === 2){
            this.setState({
                title:value
            })
        }else if(num === 3){
            this.setState({
                education:value
            })
        }
    }
    changeInputValue(num,e){
        if(num===0){
            this.setState({jobNumber: e.target.value});
        }else if(num===1){
            this.setState({name: e.target.value});
        }
        
    }
    // 筛选条件确定按钮
    sureBtn = () => {
        let {schoolYear,department,title,education,jobNumber,name} = this.state;
    	let filterValue={
    		schoolYear,
    		department,
    		title,
            education,
            jobNumber,
            name
    	}
    	
    	this.props.getFilterValue(filterValue);
    }
    render() {
        return (
            <div style={{padding: '10px 20px', lineHeight: '40px', background: 'rgba(255,255,255,0.6)'}}>
               <span>选择条件：</span> 

               <Select 
                	value={this.state.schoolYear}
                	placeholder="请选择学年" 
                	style={{ width: 120, marginRight: 10 }} 
                	onChange={this.changeFilter.bind(this, 0)}
                >
					<Option value=''>全部学年</Option>
                    {
                        this.state.schoolYearLists.map((item, index) => <Option key={index} title={item.name}   value={item.value}>{item.name}</Option>)
                    }
                </Select>
                <Select 
                	value={this.state.department}
                	placeholder="请选择部门" 
                	style={{ width: 180, marginRight: 10 }} 
                	onChange={this.changeFilter.bind(this, 1)}
                >
					<Option value=''>全部部门</Option>
                    {
                        this.state.departmentLists.map((item, index) => <Option key={index} title={item.name}   value={item.value}>{item.name}</Option>)
                    }
                </Select>
                <Select 
                	value={this.state.title}
                	placeholder="请选择职称" 
                	style={{ width: 120, marginRight: 10 }} 
                	onChange={this.changeFilter.bind(this, 2)}
                >
					<Option value=''>全部职称</Option>
                    {
                        this.state.titleLists.map((item, index) => <Option key={index} title={item.name}   value={item.value}>{item.name}</Option>)
                    }
                </Select>
                <Select 
                	value={this.state.education}
                	placeholder="请选择学历" 
                	style={{ width: 120, marginRight: 10 }} 
                	onChange={this.changeFilter.bind(this, 3)}
                >
					<Option value=''>全部学历</Option>
                    {
                        this.state.educationLists.map((item, index) => <Option key={index} title={item.name}   value={item.value}>{item.name}</Option>)
                    }
                </Select>

                <Input style={{ width: 180, marginRight: 10 }} value={this.state.jobNumber} onChange={this.changeInputValue.bind(this,0)} placeholder="请输入工号"></Input>
                <Input style={{ width: 180, marginRight: 10 }} value={this.state.name} onChange={this.changeInputValue.bind(this,1)} placeholder="请输入姓名"></Input>
                
                <Button type="primary" icon="search" onClick={this.sureBtn}>搜  索</Button>
            </div>
        )
    }
}
