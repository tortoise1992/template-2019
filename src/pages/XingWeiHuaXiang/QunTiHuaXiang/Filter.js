import React, {Component} from 'react';
import {Select, Button} from 'antd';
// import {postAction} from "src/axios";
const Option = Select.Option;

export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curYear: 2019,
            yearLists: [
				{name: "2019年", value: 2019},
				{name: "2018年", value: 2018},
				{name: "2017年", value: 2017},
				{name: "2016年", value: 2016},
				{name: "2015年", value: 2015},
			],
            // 学院
            curCollege:'',
            collegeLists:[],
            // 专业
            curMajor:'',
            majorLists:[],
            // 年级
            curGrade:'',
            gradeLists:[],
            // 班级
            curClass:'',
            classLists:[],
            // 学期
            curSemester:'',
            semesterLists:[
	            {name:"全部学期", value: ""},
	            {name: '上学期',value: "1"},
	            {name: '下学期',value: "2"}
            ]
        };
    }

    componentDidMount() {
    	this.getColledgeLists()
    	this.getGradeLists()
    	this.sureBtn()
    }
    
    // 筛选条件确定按钮
    sureBtn = () => {
    	let filterValue={
    		curYear : this.state.curYear,
    		curCollege: this.state.curCollege,
    		curMajor:this.state.curMajor,
    		curGrade:this.state.curGrade,
    		curClass:this.state.curClass,
    		curSemester:this.state.curSemester
    	}
    	
    	this.props.getFilterValue(filterValue);
    }
    
    // 获取班级list
    getClassLists(){
        this.setState({
            classLists: [
                {name: '001001班', value: '001001'},
                {name: '001002班', value: '001002'},
                {name: '001003班', value: '001003'},
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
    
    // 获取年级list
    getGradeLists() {
        this.setState({
            gradeLists: [
                {name: '2019年级', value: '2019'},
                {name: '2018年级', value: '2018'},
                {name: '2017年级', value: '2017'},
            ]
        })
    	// postAction(
    	// 	"/bigdata/school/getGradeList",
    	// 	{
    	// 		year: this.state.curYear,
    	// 		collegeCode: this.state.curCollege,
    	// 		majorCode: this.state.curMajor
    	// 	}
    	// ).then(
    	// 	(res) =>{
    	// 		if (res.success){
    	// 			this.setState({
    	// 				gradeLists: res.obj,
    	// 			})
    	// 		}
    	// 	}
    	// )
    }
    
    // 获取专业list
    getMajorLists () {
        this.setState({
            majorLists: [
                {name: '西方经济学', value: '1'},
                {name: '国际金融', value: '2'},
            ]
        })
    	// postAction(
    	// 	"/bigdata/school/listMajorByCollege",
    	// 	{
    	// 		collegeCode: this.state.curCollege
    	// 	}
    	// ).then(
    	// 	(res) => {
    	// 		if (res.success) {
    	// 			this.setState({
    	// 				majorLists: res.obj,
    	// 			})
    	// 		}
    	// 	}
    	// )
    }
    
     // 获取学院list
    getColledgeLists(){
        this.setState({
            collegeLists: [
                {name: '经济学院', value: '1'},
                {name: '法学院', value: '2'},
            ]
        })
    	// postAction(
    	// 	"/bigdata/school/listCollege",
    	// ).then(
    	// 	(res)=>{
    	// 		if (res.success) {
    	// 			this.setState({
    	// 				collegeLists: res.obj,
    	// 			})
    	// 		}
    	// 	}
    	// )
    }
    
    changeFilter(num, value){
    	if (num === 0) { // 变更自然年
    		this.setState({
                curYear: value,
            },() => {
                // this.getGradeLists()
                // this.getClassLists()
            })
    	} else if (num === 1){ // 变更学院
    		this.setState({
                curCollege: value,
            },() =>{
                // this.getMajorLists()
                // this.getGradeLists()
                // this.getClassLists()
            })
    	} else if (num === 2){ // 变更专业
    		this.setState({
                curMajor: value,
            },
            () => {
                // this.getGradeLists()
                // this.getClassLists()
            })
    	} else if (num === 3){ // 变更年级
    		this.setState({
                curGrade: value,
            },() => {
                // this.getClassLists()
            })
    	} else if (num === 4){ // 变更班级
    		this.setState({
    			curClass: value,
    		})
    	} else if (num === 5){ // 变更学期
    		this.setState({
    			curSemester: value,
    		})
    	}
    }

    render () {

        return (
            <div style={{padding: '10px 20px', lineHeight: '40px', background: 'rgba(255,255,255,1)'}}>
                <Select 
					value={this.state.curYear} 
                    placeholder="请选择学年"
                    style={{ width: 120, marginRight: 10 }} 
					onChange={this.changeFilter.bind(this, 0)}
                >
                    {
                        this.state.yearLists.map((item, index) => <Option key={index} value={item.value}>{item.name}</Option>)
                    }
                </Select>

                <Select 
                	value={this.state.curCollege}
                	placeholder="请选择学院" 
                	style={{ width: 180, marginRight: 10 }} 
                	onChange={this.changeFilter.bind(this, 1)}
                >
					<Option value=''>全部学院</Option>
                    {
                        this.state.collegeLists.map((item, index) => <Option key={index} title={item.name}   value={item.value}>{item.name}</Option>)
                    }
                </Select>

                <Select 
                	value={this.state.curMajor}
                	placeholder="请选择专业" 
                	style={{ width: 150, marginRight: 10 }} 
                	onChange={this.changeFilter.bind(this, 2)}
                >
					<Option value=''>全部专业</Option>
                    {
                        this.state.majorLists.map((item, index) => <Option key={index} title={item.name} value={item.value}>{item.name}</Option>)
                    }
                </Select>

				<Select
					value = {this.state.curGrade}
					placeholder="请选择年级"
					style={{ width: 120, marginRight: 10 }}
					onChange={this.changeFilter.bind(this, 3)}
				>
					<Option value=''>全部年级</Option>
					{
						this.state.gradeLists.map((item, index) => <Option key={index} title={item.value} value={item.name}>{item.value}</Option>)
					}
				</Select>

				<Select
					value = {this.state.curClass}
					placeholder="请选择班级"
					style={{ width: 120, marginRight: 10 }}
					onChange={this.changeFilter.bind(this, 4)}
				>
					<Option value=''>全部班级</Option>
					{
						this.state.classLists.map((item, index) => <Option key={index} title={item.name} value={item.value}>{item.name}</Option>)
					}
				</Select>
                
                <Select 
					value={this.state.curSemester}
					placeholder="请选择学期" 
					style={{ width: 120, marginRight: 10 }} 
					onChange={this.changeFilter.bind(this, 5)}
				>
					{
						this.state.semesterLists.map((item, index) => <Option key={index} value={item.value}>{item.name}</Option>)
					}
				</Select>

                <Button type="primary" icon="search" onClick={this.sureBtn}>搜  索</Button>
            </div>
        )
    }
}
