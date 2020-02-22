import React, { Component } from 'react';
import { Button, Tree, Select, message } from 'antd';
// import { getAction, postAction } from 'src/axios'
const Option = Select.Option;
const TreeNode = Tree.TreeNode;

const startYear = new Date().getFullYear();
const endYear = new Date().getFullYear();
const curMonth = new Date().getMonth() + 1;
let yearLists = [];
for (let i = 0; i < 7; i++) {
  yearLists.push({
    name: startYear - i + "年",
    value: startYear - i
  })
}
export default class ShuJu extends Component {
    state = {
        yearLists,
        startYear: curMonth < 9 ? (startYear - 2) + "" : startYear + "",
        endYear: curMonth < 9 ? (endYear - 1) + "" : endYear + "",
        menuLists: [],  //菜单列表
        expandedKeys: [],
        selectedKeys: [],
        halfCheckData: [],
        classCode: [],
    }

    componentDidMount(){
        this.getMenuLists();
        this.getRoleMenuLists()
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
            this.getRoleMenuLists()
        }
    }

    getMenuLists(){
        let res = {"success":true,"msg":"成功","obj":[{"code":"0#-1","name":"全部","subDataPower":[{"code":"1#100172","name":"建筑学院","subDataPower":[{"code":"2#011","name":"建筑学","subDataPower":[{"code":"3#011181","name":"011181","subDataPower":null},{"code":"3#011182","name":"011182","subDataPower":null},{"code":"3#011183","name":"011183","subDataPower":null}]},{"code":"2#012","name":"城市规划","subDataPower":[{"code":"3#012181","name":"012181","subDataPower":null},{"code":"3#012182","name":"012182","subDataPower":null}]},{"code":"2#014","name":"建筑杨廷宝班","subDataPower":[]},{"code":"2#015","name":"景观学","subDataPower":[{"code":"3#015181","name":"015181","subDataPower":null}]},{"code":"2#019","name":"建筑杨廷宝班","subDataPower":[]}]},{"code":"1#100180","name":"机械工程学院","subDataPower":[{"code":"2#020","name":"机械工程","subDataPower":[{"code":"3#020181","name":"020181","subDataPower":null},{"code":"3#020182","name":"020182","subDataPower":null},{"code":"3#020183","name":"020183","subDataPower":null},{"code":"3#020184","name":"020184","subDataPower":null},{"code":"3#020185","name":"020185","subDataPower":null},{"code":"3#020186","name":"020186","subDataPower":null}]},{"code":"2#026","name":"工业工程","subDataPower":[{"code":"3#026181","name":"026181","subDataPower":null}]},{"code":"2#02A","name":"机械类","subDataPower":[]}]},{"code":"1#100193","name":"能源与环境学院","subDataPower":[{"code":"2#030","name":"热能与动力工程","subDataPower":[]},{"code":"2#031","name":"建筑环境与设备工程","subDataPower":[]},{"code":"2#032","name":"环境工程","subDataPower":[{"code":"3#032187","name":"032187","subDataPower":null}]},{"code":"2#033","name":"核工程与核技术","subDataPower":[]},{"code":"2#03A","name":"能源动力类","subDataPower":[{"code":"3#03A181","name":"03A181","subDataPower":null},{"code":"3#03A182","name":"03A182","subDataPower":null},{"code":"3#03A183","name":"03A183","subDataPower":null},{"code":"3#03A184","name":"03A184","subDataPower":null},{"code":"3#03A185","name":"03A185","subDataPower":null},{"code":"3#03A186","name":"03A186","subDataPower":null}]}]},{"code":"1#100202","name":"信息科学与工程学院","subDataPower":[{"code":"2#040","name":"信息工程","subDataPower":[{"code":"3#040181","name":"040181","subDataPower":null},{"code":"3#040182","name":"040182","subDataPower":null},{"code":"3#040183","name":"040183","subDataPower":null},{"code":"3#040184","name":"040184","subDataPower":null},{"code":"3#040185","name":"040185","subDataPower":null},{"code":"3#040186","name":"040186","subDataPower":null},{"code":"3#040187","name":"040187","subDataPower":null}]},{"code":"2#042","name":"信息工程","subDataPower":[{"code":"3#042188","name":"042188","subDataPower":null}]}]},{"code":"1#100215","name":"土木工程学院","subDataPower":[{"code":"2#051","name":"土木工程","subDataPower":[]},{"code":"2#052","name":"工程管理","subDataPower":[{"code":"3#052181","name":"052181","subDataPower":null},{"code":"3#052182","name":"052182","subDataPower":null}]},{"code":"2#053","name":"工程力学","subDataPower":[{"code":"3#053181","name":"053181","subDataPower":null}]},{"code":"2#055","name":"给水排水工程","subDataPower":[]},{"code":"2#056","name":"土木杨廷宝班","subDataPower":[]},{"code":"2#057","name":"土建类(丁大钧班)","subDataPower":[{"code":"3#057181","name":"057181","subDataPower":null}]},{"code":"2#05A","name":"土建类（土木）","subDataPower":[{"code":"3#05A181","name":"05A181","subDataPower":null},{"code":"3#05A182","name":"05A182","subDataPower":null},{"code":"3#05A183","name":"05A183","subDataPower":null},{"code":"3#05A184","name":"05A184","subDataPower":null},{"code":"3#05A185","name":"05A185","subDataPower":null},{"code":"3#05A186","name":"05A186","subDataPower":null}]}]},{"code":"1#100225","name":"电子科学与工程学院","subDataPower":[{"code":"2#060","name":"电子科学与技术","subDataPower":[]},{"code":"2#061","name":"物联网工程","subDataPower":[]},{"code":"2#062","name":"电子科学与技术","subDataPower":[{"code":"3#062186","name":"062186","subDataPower":null}]},{"code":"2#063","name":"新能源材料与器件","subDataPower":[]},{"code":"2#06A","name":"电子科学与技术(类)","subDataPower":[{"code":"3#06A181","name":"06A181","subDataPower":null},{"code":"3#06A182","name":"06A182","subDataPower":null},{"code":"3#06A183","name":"06A183","subDataPower":null},{"code":"3#06A184","name":"06A184","subDataPower":null},{"code":"3#06A185","name":"06A185","subDataPower":null}]}]},{"code":"1#100234","name":"数学学院","subDataPower":[{"code":"2#070","name":"数学类","subDataPower":[{"code":"3#070181","name":"070181","subDataPower":null},{"code":"3#070182","name":"070182","subDataPower":null},{"code":"3#070183","name":"070183","subDataPower":null}]},{"code":"2#071","name":"数学与应用数学","subDataPower":[]},{"code":"2#072","name":"信息与计算科学","subDataPower":[]},{"code":"2#073","name":"统计学","subDataPower":[]}]},{"code":"1#100242","name":"自动化学院","subDataPower":[{"code":"2#080","name":"自动化","subDataPower":[]},{"code":"2#081","name":"机器人工程","subDataPower":[]},{"code":"2#08A","name":"自动化（类）","subDataPower":[{"code":"3#08A181","name":"08A181","subDataPower":null},{"code":"3#08A182","name":"08A182","subDataPower":null},{"code":"3#08A183","name":"08A183","subDataPower":null},{"code":"3#08A184","name":"08A184","subDataPower":null}]}]},{"code":"1#100247","name":"计算机科学与工程学院、软件学院","subDataPower":[{"code":"2#090","name":"计算机科学与技术","subDataPower":[{"code":"3#090181","name":"090181","subDataPower":null},{"code":"3#090182","name":"090182","subDataPower":null},{"code":"3#090183","name":"090183","subDataPower":null},{"code":"3#090184","name":"090184","subDataPower":null}]},{"code":"2#091","name":"计算机科学与技术（人工智能）","subDataPower":[{"code":"3#091181","name":"091181","subDataPower":null},{"code":"3#091182","name":"091182","subDataPower":null}]},{"code":"2#711","name":"软件工程","subDataPower":[{"code":"3#711181","name":"711181","subDataPower":null},{"code":"3#711182","name":"711182","subDataPower":null},{"code":"3#711183","name":"711183","subDataPower":null},{"code":"3#711184","name":"711184","subDataPower":null}]},{"code":"2#71Y","name":"软件工程（全英文）","subDataPower":[]}]},{"code":"1#100259","name":"物理学院","subDataPower":[{"code":"2#100","name":"物理学类","subDataPower":[{"code":"3#100181","name":"100181","subDataPower":null},{"code":"3#100182","name":"100182","subDataPower":null}]},{"code":"2#101","name":"应用物理学","subDataPower":[]},{"code":"2#102","name":"光信息科学与技术","subDataPower":[]},{"code":"2#103","name":"物理学","subDataPower":[]}]},{"code":"1#100265","name":"生物科学与医学工程学院","subDataPower":[{"code":"2#111","name":"生物医学工程","subDataPower":[]},{"code":"2#112","name":"生物医学工程（本硕连读）","subDataPower":[{"code":"3#112181","name":"112181","subDataPower":null}]},{"code":"2#113","name":"生物信息技术","subDataPower":[]},{"code":"2#11A","name":"生物医学工程(类)","subDataPower":[{"code":"3#11A181","name":"11A181","subDataPower":null},{"code":"3#11A182","name":"11A182","subDataPower":null},{"code":"3#11A183","name":"11A183","subDataPower":null}]},{"code":"2#261","name":"科学教育","subDataPower":[]}]},{"code":"1#100272","name":"材料科学与工程学院","subDataPower":[{"code":"2#120","name":"材料科学与工程","subDataPower":[{"code":"3#120181","name":"120181","subDataPower":null},{"code":"3#120182","name":"120182","subDataPower":null},{"code":"3#120183","name":"120183","subDataPower":null},{"code":"3#120184","name":"120184","subDataPower":null}]}]},{"code":"1#100278","name":"人文学院","subDataPower":[{"code":"2#131","name":"政治学与行政学","subDataPower":[]},{"code":"2#132","name":"社会学","subDataPower":[]},{"code":"2#133","name":"旅游管理","subDataPower":[]},{"code":"2#134","name":"汉语言文学","subDataPower":[]},{"code":"2#136","name":"哲学","subDataPower":[]},{"code":"2#13A","name":"人文科学试验班","subDataPower":[{"code":"3#13A181","name":"13A181","subDataPower":null},{"code":"3#13A182","name":"13A182","subDataPower":null},{"code":"3#13A183","name":"13A183","subDataPower":null},{"code":"3#13A184","name":"13A184","subDataPower":null},{"code":"3#13A185","name":"13A185","subDataPower":null},{"code":"3#13A186","name":"13A186","subDataPower":null},{"code":"3#13A187","name":"13A187","subDataPower":null},{"code":"3#13A188","name":"13A188","subDataPower":null},{"code":"3#13A189","name":"13A189","subDataPower":null}]}]},{"code":"1#100285","name":"经济管理学院","subDataPower":[{"code":"2#141","name":"信息管理与信息系统","subDataPower":[]},{"code":"2#142","name":"国际经济与贸易","subDataPower":[]},{"code":"2#143","name":"工商管理","subDataPower":[]},{"code":"2#144","name":"会计学","subDataPower":[]},{"code":"2#145","name":"金融学","subDataPower":[]},{"code":"2#146","name":"经济学","subDataPower":[]},{"code":"2#147","name":"电子商务","subDataPower":[]},{"code":"2#148","name":"物流管理","subDataPower":[]},{"code":"2#149","name":"金融工程","subDataPower":[]},{"code":"2#14B","name":"工商管理类","subDataPower":[{"code":"3#14B181","name":"14B181","subDataPower":null},{"code":"3#14B182","name":"14B182","subDataPower":null},{"code":"3#14B183","name":"14B183","subDataPower":null},{"code":"3#14B184","name":"14B184","subDataPower":null},{"code":"3#14B185","name":"14B185","subDataPower":null},{"code":"3#14B186","name":"14B186","subDataPower":null}]},{"code":"2#14C","name":"经济学类","subDataPower":[{"code":"3#14C181","name":"14C181","subDataPower":null},{"code":"3#14C182","name":"14C182","subDataPower":null},{"code":"3#14C183","name":"14C183","subDataPower":null},{"code":"3#14C184","name":"14C184","subDataPower":null}]},{"code":"2#14Y","name":"国际经济与贸易（全英文）","subDataPower":[]}]},{"code":"1#100295","name":"电气工程学院","subDataPower":[{"code":"2#160","name":"电气工程及其自动化","subDataPower":[{"code":"3#160181","name":"160181","subDataPower":null},{"code":"3#160182","name":"160182","subDataPower":null},{"code":"3#160183","name":"160183","subDataPower":null},{"code":"3#160184","name":"160184","subDataPower":null},{"code":"3#160185","name":"160185","subDataPower":null},{"code":"3#160186","name":"160186","subDataPower":null}]}]},{"code":"1#100304","name":"外国语学院","subDataPower":[{"code":"2#171","name":"英语","subDataPower":[{"code":"3#171181","name":"171181","subDataPower":null},{"code":"3#171182","name":"171182","subDataPower":null},{"code":"3#171183","name":"171183","subDataPower":null}]},{"code":"2#172","name":"日语","subDataPower":[{"code":"3#172181","name":"172181","subDataPower":null},{"code":"3#172182","name":"172182","subDataPower":null}]}]},{"code":"1#100314","name":"化学化工学院","subDataPower":[{"code":"2#190","name":"化工与制药类","subDataPower":[{"code":"3#190181","name":"190181","subDataPower":null},{"code":"3#190182","name":"190182","subDataPower":null},{"code":"3#190183","name":"190183","subDataPower":null}]},{"code":"2#191","name":"化学工程与工艺","subDataPower":[]},{"code":"2#192","name":"制药工程","subDataPower":[]},{"code":"2#193","name":"化学","subDataPower":[]}]},{"code":"1#100319","name":"交通学院","subDataPower":[{"code":"2#210","name":"交通工程(茅以升)","subDataPower":[]},{"code":"2#211","name":"交通工程","subDataPower":[]},{"code":"2#212","name":"交通运输","subDataPower":[]},{"code":"2#213","name":"测绘工程","subDataPower":[]},{"code":"2#214","name":"港口航道与海岸工程","subDataPower":[]},{"code":"2#215","name":"地理信息系统","subDataPower":[]},{"code":"2#216","name":"勘查技术与工程","subDataPower":[]},{"code":"2#217","name":"道路桥梁与渡河工程","subDataPower":[]},{"code":"2#218","name":"城市地下空间工程","subDataPower":[]},{"code":"2#219","name":"道路桥梁与渡河工程(茅以升)","subDataPower":[]},{"code":"2#21A","name":"交通运输类（交通土建与交通工程）","subDataPower":[{"code":"3#21A181","name":"21A181","subDataPower":null},{"code":"3#21A182","name":"21A182","subDataPower":null},{"code":"3#21A183","name":"21A183","subDataPower":null},{"code":"3#21A184","name":"21A184","subDataPower":null},{"code":"3#21A185","name":"21A185","subDataPower":null},{"code":"3#21A186","name":"21A186","subDataPower":null},{"code":"3#21A187","name":"21A187","subDataPower":null},{"code":"3#21A188","name":"21A188","subDataPower":null},{"code":"3#21A189","name":"21A189","subDataPower":null}]},{"code":"2#21B","name":"测绘类","subDataPower":[{"code":"3#21B181","name":"21B181","subDataPower":null},{"code":"3#21B182","name":"21B182","subDataPower":null}]}]},{"code":"1#100331","name":"仪器科学与工程学院","subDataPower":[{"code":"2#220","name":"测控技术与仪器","subDataPower":[{"code":"3#220181","name":"220181","subDataPower":null},{"code":"3#220182","name":"220182","subDataPower":null},{"code":"3#220183","name":"220183","subDataPower":null},{"code":"3#220184","name":"220184","subDataPower":null}]}]},{"code":"1#100337","name":"艺术学院","subDataPower":[{"code":"2#240","name":"工业艺术设计","subDataPower":[]},{"code":"2#241","name":"美术学","subDataPower":[{"code":"3#241181","name":"241181","subDataPower":null}]},{"code":"2#242","name":"动画","subDataPower":[{"code":"3#242181","name":"242181","subDataPower":null}]},{"code":"2#243","name":"产品设计","subDataPower":[{"code":"3#243181","name":"243181","subDataPower":null},{"code":"3#243182","name":"243182","subDataPower":null}]},{"code":"2#24A","name":"艺术类","subDataPower":[]}]},{"code":"1#100342","name":"法学院","subDataPower":[{"code":"2#250","name":"法学","subDataPower":[{"code":"3#250181","name":"250181","subDataPower":null},{"code":"3#250182","name":"250182","subDataPower":null}]}]},{"code":"1#100365","name":"公共卫生学院","subDataPower":[{"code":"2#421","name":"预防医学","subDataPower":[{"code":"3#421181","name":"421181","subDataPower":null},{"code":"3#421182","name":"421182","subDataPower":null}]},{"code":"2#422","name":"劳动与社会保障","subDataPower":[{"code":"3#422181","name":"422181","subDataPower":null},{"code":"3#422182","name":"422182","subDataPower":null}]}]},{"code":"1#100381","name":"吴健雄学院","subDataPower":[{"code":"2#610","name":"电子信息类强化班","subDataPower":[]},{"code":"2#611","name":"机械动力类强化班","subDataPower":[]},{"code":"2#613","name":"高等理工实验班","subDataPower":[]},{"code":"2#615","name":"工科试验班","subDataPower":[{"code":"3#615181","name":"615181","subDataPower":null},{"code":"3#615182","name":"615182","subDataPower":null},{"code":"3#615183","name":"615183","subDataPower":null},{"code":"3#615184","name":"615184","subDataPower":null}]}]},{"code":"1#100482","name":"医学院","subDataPower":[{"code":"2#411","name":"生物工程","subDataPower":[{"code":"3#411181","name":"411181","subDataPower":null}]},{"code":"2#431","name":"临床医学","subDataPower":[]},{"code":"2#432","name":"临床医学（本硕连读）","subDataPower":[]},{"code":"2#433","name":"医学影像学","subDataPower":[]},{"code":"2#434","name":"医学检验","subDataPower":[{"code":"3#434181","name":"434181","subDataPower":null}]},{"code":"2#435","name":"护理学","subDataPower":[]},{"code":"2#436","name":"临床医学（5＋3一体化）","subDataPower":[{"code":"3#436181","name":"436181","subDataPower":null},{"code":"3#436182","name":"436182","subDataPower":null},{"code":"3#436183","name":"436183","subDataPower":null},{"code":"3#436184","name":"436184","subDataPower":null}]},{"code":"2#438","name":"临床医学（拔尖试点班）","subDataPower":[{"code":"3#438181","name":"438181","subDataPower":null}]},{"code":"2#43A","name":"临床医学与医学技术类","subDataPower":[{"code":"3#43A181","name":"43A181","subDataPower":null},{"code":"3#43A182","name":"43A182","subDataPower":null},{"code":"3#43A183","name":"43A183","subDataPower":null},{"code":"3#43A184","name":"43A184","subDataPower":null}]}]},{"code":"1#57","name":"网络空间安全学院","subDataPower":[{"code":"2#570","name":"计算机科学与技术","subDataPower":[]},{"code":"2#571","name":"网络空间安全","subDataPower":[{"code":"3#571181","name":"571181","subDataPower":null},{"code":"3#571182","name":"571182","subDataPower":null},{"code":"3#571183","name":"571183","subDataPower":null},{"code":"3#571184","name":"571184","subDataPower":null}]}]}]}],"errorCode":null}
        if (res.success) {
            this.setState({
                menuLists: res.obj || [],
                expandedKeys: ['0#-1']
            })
        }

        // let grade = `${this.state.startYear},${this.state.endYear}`;
        // getAction('/bigdata/system/dataPower/list', { grade }).then(res => {
        //     if (res.success) {
        //         this.setState({
        //             menuLists: data || [],
        //             expandedKeys: ['0#-1']
        //         }, () => {
        //             this.getRoleMenuLists()
        //         })
        //     }
        // })
    }

    getRoleMenuLists(){
        let res = {"success":true,"msg":"成功","obj":{"roleId":1,"menu":null,"halfCheckMenu":null,"allCheckMenu":null,"data":null,"halfCheckData":["0#-1"],"allCheckData":["1#100172","2#019","2#015","2#014","2#011","2#012","3#011182","3#015181","3#012182","3#012181","3#011183","3#011181","3#011181","3#015181","3#012182","3#012181","3#011183","3#011182"]},"errorCode":null};
        if (res.success) {
            this.setState({
                selectedKeys: res.obj.allCheckData || [],
                halfCheckMenu:res.obj.halfCheckMenu
            })
        }

        // getAction('/bigdata/system/role/res/list', {
        //     roleId: this.props.curRole.id, 
        //     sourceCode: 'pc'
        // }).then(res => {
        //     if (res.success) {
        //         this.setState({
        //             selectedKeys: res.obj.allCheckData || [],
        //             halfCheckMenu:res.obj.halfCheckMenu
        //         })
        //     }
        // })
    }

    renderTreeNodes = (data) => {
        return data.map(item => {
            if (item.subDataPower) {
                return (
                    <TreeNode title={item.name} key={item.code} dataRef={item}>
                        {this.renderTreeNodes(item.subDataPower)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} key={item.code} title={item.name} dataRef={item}></TreeNode>;
        });
    }

    //保存修改后的菜单权限
    saveAction = () => {
        // 进行保存操作，获取对应数据，发送请求，根据请求返回就行相应提示
        // let { classCode, halfCheckData,selectedKeys } = this.state;
        // let classCodeObj = [];
        // classCode.forEach(item => {
        //     classCodeObj.push(item)
        // })
        // let resCodes = classCodeObj.concat(selectedKeys);

        // let newArr = resCodes.filter(res => res.length < 9)
        // if (newArr.length > 0) {
        //     let data = {
        //         roleId: this.props.curRole.id,
        //         sourceCode: 'pc',
        //         allCheckData: newArr,
        //         halfCheckData: halfCheckData
        //     }
        //     postAction('/bigdata/system/role/dataPower/update', data).then(res => {
        //         if (res.success) {
        //             message.success('权限配置成功！');
        //         } else {
        //             message.error(res.obj);
        //         }
        //     })
        // }
    }

    handleCheckTree = (selectNodes, e) => {
        console.log(selectNodes, e)
        let classCode = []
        e.checkedNodesPositions.forEach(item => {
            let split = item.pos.split("-")
            if(split.length === 5){//班级
                classCode.push(item.node.props.code)
            }
        })
        this.setState({
            selectedKeys: selectNodes,
            halfCheckData: e.halfCheckedKeys,
            classCode,
        })
    }

    //选择年份
    onChange(type, value) {
        if (type === 0) {
            if(value > this.state.endYear){
                message.warn("起始时间不能大于截止时间");
                return false;
            }
            this.setState({
                startYear: value
            })
        } else if (type === 1) {
            if(value < this.state.startYear){
                message.warn("截止时间不能小于起始时间");
                return false;
            }
            alert(111);
            this.setState({
                endYear: value
            })
        }
    }

    render() {
        const { selectedKeys, menuLists, expandedKeys } = this.state;
        return (
            <div style={{margin: 20}}>
                <div>
                    <span>年级</span>
                    <div style={{ display: 'inline', marginLeft: 15 }}>
                        <Select value={this.state.startYear} style={{ width: 120 }} onChange={this.onChange.bind(this, 0)}>
                            {
                                this.state.yearLists.map((item, index) => <Option key={index} value={item.value}>{item.name}</Option>)
                            }
                        </Select>
                        <span style={{ marginRight: 15, marginLeft: 15 }}>至</span>
                        <Select value={this.state.endYear} style={{ width: 120 }} onChange={this.onChange.bind(this, 1)}>
                            {
                                this.state.yearLists.map((item, index) => <Option key={index} value={item.value}>{item.name}</Option>)
                            }
                        </Select>
                    </div>
                    <Button type="primary" onClick={this.getMenuLists} style={{ marginLeft: 15 }}>查询</Button>
                </div>
                <Tree
                    checkable
                    expandedKeys={expandedKeys}
                    onExpand={(expandedKeys) => {this.setState({expandedKeys})}}
                    checkedKeys={selectedKeys}
                    onCheck={this.handleCheckTree}
                >
                    {this.renderTreeNodes(menuLists)}
                </Tree>
                <div style={{ textAlign: 'right' }}>
                    <Button type="primary" onClick={this.saveAction}>保存</Button>
                </div>
            </div>
        )
    }
}