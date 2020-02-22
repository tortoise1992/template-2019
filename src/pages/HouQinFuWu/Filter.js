import React, {Component} from 'react';
import {Select, Button} from 'antd';
// import {postAction} from "src/axios";
const Option = Select.Option;

export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // 学年
            curYear:'',
            yearLists: [], 
            // 学院
            curCollege:'',
            collegeLists:[],
            // 专业
            curMajor:'',
            majorLists:[],
            // 班级
            curClass:'',
            classLists:[],
        };
    }

    componentDidMount() {
        this.getYearLists();
    	this.getColledgeLists();
        this.getMajorLists();
        this.getClassLists();
    	this.sureBtn()
    }
    
    // 筛选条件确定按钮
    sureBtn = () => {
    	let filterValue={
            curYear: this.state.curYear,
    		curCollege: this.state.curCollege,
            curMajor: this.state.curMajor,
            curClass: this.state.curClass
    	}
    	
    	this.props.getFilterValue(filterValue);
    }

    getYearLists () {
        this.setState({
            yearLists: [
                {name: '2019年', value: '2019'},
                {name: '2018年', value: '2018'},
            ],
            curYear: 2019
        }) 
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

    getClassLists () {
        this.setState({
            classLists: [
                {name: '19001班', value: '19001'},
                {name: '19002班', value: '19002'},
            ]
        })
    }
    
    changeFilter(num, value){
        if (num === 0){ // 变更学年
    		this.setState({
                curYear: value,
            },() =>{
                // this.getMajorLists()
            })
    	} else if (num === 1){ // 变更学院
    		this.setState({
                curCollege: value,
            },() =>{
                // this.getMajorLists()
                // this.getClassLists()
            })
    	} else if (num === 2){ // 变更专业
    		this.setState({
                curMajor: value,
            },() => {
                // this.getClassLists()
            })
    	} else if (num === 3){ // 变更班级
    		this.setState({
                curClass: value,
            })
    	}
    }

    render () {

        return (
            <div style={{padding: '10px 20px', lineHeight: '40px', background: 'rgba(255,255,255,0.6)'}}>
                <span>选择条件：</span>

                <Select 
                	value={this.state.curYear}
                	placeholder="请选择学年" 
                	style={{ width: 120, marginRight: 10 }} 
                	onChange={this.changeFilter.bind(this, 0)}
                >
                    {
                        this.state.yearLists.map((item, index) => <Option key={index} title={item.name}   value={item.value}>{item.name}</Option>)
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
                	value={this.state.curClass}
                	placeholder="请选择班级" 
                	style={{ width: 150, marginRight: 10 }} 
                	onChange={this.changeFilter.bind(this, 3)}
                >
					<Option value=''>全部班级</Option>
                    {
                        this.state.classLists.map((item, index) => <Option key={index} title={item.name} value={item.value}>{item.name}</Option>)
                    }
                </Select>

                <Button type="primary" icon="search" onClick={this.sureBtn}>搜  索</Button>
            </div>
        )
    }
}
