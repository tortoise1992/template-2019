import React, { Component } from 'react';
import { Row, Col  } from 'antd';
import IconFont from 'src/iconfont';
// import { postAction } from "../../../../../axios"
import boyPng from './img/boyPng.png';
import girlPng from './img/girlPng.png';
import styles from '../../../index.module.less';

export default class Index extends Component {

    state = {
        data: {
            personalInfo: {
                studentName: '高展',
                gender: '男性',
                nation: '汉族',
                birthday: '2001-08-06',
                age: '共青团员',
            }
        },
        labelList: [
            {
                name: '学习情况',
                label: ['学良', '挂科1门', '挂科1门']
            },
            {
                name: '上网习惯',
                label: ['网虫', '上网较健康']
            },
            {
                name: '三餐规律',
                label: ['三餐较规律', '吃早餐较多']
            },
            {
                name: '运动强度',
                label: ['运动达人']
            },
            {
                name: '消费水平',
                label: ['小康人家', '非贫困生', '非贫困生']
            },
            {
                name: '图书借阅',
                label: ['理工男', '历史书迷']
            }
        ]
    }

    componentDidMount() {
        // this.getStudentDetail()
    }

    getStudentDetail() {
    	// let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo;
    	// let data = { studentNo: _studentNo };
        // postAction(
        //     '/bigdata/portrait/getPersonalLabel',data
        // ).then((res) => {
        //     if (res.success) {
        //         if(res.obj !== '' && res.obj.studentInfo !== ''){
        //             this.setState({
        //                 data: {
        //                     personalInfo: {
        //                         studentName: res.obj.studentInfo.name,
        //                         gender: res.obj.studentInfo.gender,
        //                         nation: res.obj.studentInfo.nation,
        //                         birthday: res.obj.studentInfo.birthday,
        //                         politicalStatus: res.obj.studentInfo.politicalStatus
        //                     }
        //                 },
        //                 studyInfo: res.obj.studyInfo,
        //                 internetInfo: res.obj.internetInfo,
        //                 identity: res.obj.identifyInfo,
        //                 consumeInfo: res.obj.consumeInfo,

        //             })
        //         }else{
        //             this.setState({
        //                 data: {
        //                     personalInfo: {
        //                         studentName: '',
        //                         gender: '',
        //                         hometown: '',
        //                         birthday: '',
        //                         age: '',
        //                     }
        //                 },
        //                 studyInfo: [],
        //                 internetInfo: [],
        //                 identity: [],
        //                 consumeInfo: [],
        //             })
        //         }
        //     }
        // })

        // // 资助情况
        // postAction(
        //     "/bigdata/povertyAnalyze/subsidizeTarget",data
        // ).then(
        //     (res) => {
        //         if (res.success) {
        //             if (res.obj && res.obj.isTarget) {
        //                 this.setState({
        //                     situation: [{ labelName: res.obj.isTarget}]
        //                 })
        //             }
        //         } else {
        //             this.setState({
        //                 situation:[]
        //             })
        //         }
        //     }
        // )

        // // 心理预警
        // postAction(
        //     "/bigdata/mentality/getCurrentAlarm",data
        // ).then(
        //     (res) => {
        //         if (res.success) {
        //             if (res.obj && res.obj.length > 0) {
        //                 this.setState({
        //                     psychological:[{ labelName: res.obj}]
        //                 })
        //             }
        //         } else {
        //             this.setState({
        //                 psychological:[]
        //             })
        //         }
        //     }
        // )
    }
    
    render() {
        const Genderpic = this.state.data.personalInfo.gender && this.state.data.personalInfo.gender === '男性' ? boyPng : girlPng;
        const { personalInfo: { studentName, gender, nation, birthday, politicalStatus } } = this.state.data
        const { labelList } = this.state
        return (
            <Row>
                <Col span={7} style={{textAlign: 'center'}}>
                    <img src={Genderpic} alt="" style={{marginTop: 80}}/>
                </Col>
                <Col span={17}>
                    <div className={styles.blackboard}>
                        <div className={styles.msg}>
                            <div className={styles.left}>
                                <IconFont type={'icon-ziliaoguanli'} style={{fontSize: 46, color: '#fff'}}/>
                            </div>
                            <div className={styles.right}>
                                <p>姓名：<span>{studentName}</span></p>
                                <p>性别：<span>{gender}</span></p>
                                <p>民族：<span>{nation}</span></p><br />
                                <p>生日：<span>{birthday}</span></p>
                                <p>政治面貌：<span>{politicalStatus}</span></p>
                            </div>
                        </div>
                        <div className={styles.labels}>
                            {
                                labelList && labelList[0] && labelList.map((item, i) => {
                                    return <div className={styles.labelItem} key={i}>
                                        <div className={styles.title}>
                                            <p className={styles.line}/>
                                            <p className={styles.text}>{item.name}</p>
                                        </div>
                                        <div className={styles.list}>
                                            {
                                                item.label[0] && item.label.map((ele, index) => (
                                                    <p key={index}>{ele}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}