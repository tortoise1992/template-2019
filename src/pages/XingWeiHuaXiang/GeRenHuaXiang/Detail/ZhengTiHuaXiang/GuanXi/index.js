import React, { Component, Fragment } from 'react';
import { Card } from 'antd';
import ShowChart from "./ShowChart";
import NoData from '../NoData';
// import { postAction } from "../../../../../axios"
import styles from '../../../index.module.less';

export default class Index extends Component {

    state = {
        relationInfo: {
            nodes: [
                {image: "", role: "", name: "孔星淇(建筑学院213180583)"},
                {image: "", role: "", name: "张远(建筑学院213181665)"},
                {image: "", role: "", name: "余梦瑶(建筑学院213181926)"},
                {image: "", role: "", name: "杨箐(建筑学院213182469)"},
                {image: "", role: "", name: "赵一璞(建筑学院213182472)"},
                {image: "", role: "", name: "薛童(建筑学院213182844)"}
            ],
            edges: [
                {source: 0, target: 1, relation: "朋友(32)"},
                {source: 0, target: 2, relation: "朋友(11)"},
                {source: 0, target: 3, relation: "朋友(20)"},
                {source: 0, target: 4, relation: "朋友(15)"},
                {source: 0, target: 5, relation: "朋友(11)"}
            ]
        },
        totalCount: 0,
        classmateCount: 0,
        teacherCount: 0,
    }

    componentDidMount() {
        // this.getRelationInfo()
    }

    getRelationInfo() {
        // let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo
        // postAction(
        //     '/bigdata/portrait/getGroupRelation',
        //     {
        //         studentNo: _studentNo
        //     }
        // ).then((res) => {
        //     if (res.success) {
        //         if (res.obj !== '' && res.obj !== '') {
        //             let relationInfo = res.obj;
        //             this.setState({
        //                 relationInfo: {
        //                     "nodes": relationInfo.nodes,
        //                     "edges": relationInfo.edges
        //                 },
        //                 // totalCount: relationInfo.classmateCount + relationInfo.teacherCount,
        //                 // classmateCount: relationInfo.classmateCount,
        //                 // teacherCount: relationInfo.teacherCount,
        //             })
        //         } else {
        //             this.setState({
        //                 relationInfo: {
        //                     "nodes": [],
        //                     "edges": []
        //                 },
        //                 totalCount: 0,
        //                 classmateCount: 0,
        //                 teacherCount: 0
        //             })
        //         }
        //     }
        // })
    }
    

    render() {
        let { relationInfo } = this.state;
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>个人关系图谱</div>}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
                {
                    (relationInfo && relationInfo.nodes[0] && relationInfo.edges[0]) ? 
                    <Fragment>
                        <ShowChart data={relationInfo}/>
                        <div style={{marginTop: 10}}>
                            迄今为止，该生于本校{this.state.totalCount}人有或远或近的联系：同学关系<span style={{color: '#f00'}}>{this.state.classmateCount}</span>人、师生关系<span style={{color: '#f00'}}>{this.state.teacherCount}</span>人。
                        </div>
                    </Fragment>:<NoData height={300} />
                }
            </Card>
        )
    }
}