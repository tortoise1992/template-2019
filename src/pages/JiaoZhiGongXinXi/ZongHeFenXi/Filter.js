import React, { Component } from 'react'
import {Select, Button} from 'antd';
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
            departmentLists:[]
            
        };
    }
    componentDidMount(){
        this.getSchoolYearLists();
        this.getDepartmentLists();

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

    changeFilter = (num,value)=>{
        if(num===0){//变更学年
            this.setState({
                schoolYear:value
            })
        }else if(num === 1){
            this.setState({
                department:value
            })
        }
    }

    // 筛选条件确定按钮
    sureBtn = () => {
        let {schoolYear,department} = this.state;
    	let filterValue={
    		schoolYear,
    		department,
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
                	style={{ width: 160, marginRight: 10 }} 
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
                	style={{ width: 160, marginRight: 10 }} 
                	onChange={this.changeFilter.bind(this, 1)}
                >
					<Option value=''>全部部门</Option>
                    {
                        this.state.departmentLists.map((item, index) => <Option key={index} title={item.name}   value={item.value}>{item.name}</Option>)
                    }
                </Select>

                <Button type="primary" icon="search" onClick={this.sureBtn}>搜  索</Button>
            </div>
        )
    }
}
