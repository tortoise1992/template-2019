import React, { Component } from 'react';
import { Card, Row, Col, DatePicker, Timeline } from 'antd';
import PathMap from "./PathMap";
// import {getAction, postAction} from "src/axios";
import styles from '../../../index.module.less';


export default class Index extends Component {
    state = {
        data: [],
        trajectory: [],
        date:[],
    }

    componentDidMount () {
        this.getDate()
    }

    getDate () {
        this.setState({
            date: ['2019-11-01','2019-11-02','2019-11-03']
        })
        // let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo;
        // getAction(
        //     `/bigdata/gisStudentTrace/getHasTraceDate?studentNo=${_studentNo}`
        // ).then(
        //     (res) => {
        //         if (res.success) {
        //             this.setState({
        //                 date: res.obj
        //             })
        //         }
        //     }
        // )
    }

    disabledDate(a,time){
        if(!time){
			return false;
		}else{
            if(a.length>0){
                return a.indexOf(time.format("YYYY-MM-DD")) < 0;
            }else{
                return true;
            }
		}
    }

    onChange(date, dateString) {
        this.getData(dateString);
    }

    //转换时间
    formatDateTime(timeStamp) {
        let date = new Date(timeStamp);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let h = date.getHours();
        let i = date.getMinutes();
        let s = date.getSeconds();
        m = m < 10 ? ('0' + m) : m;
        d = d < 10 ? ('0' + d) : d;
        h = h < 10 ? ('0' + h) : h;
        i = i < 10 ? ('0' + i) : i;
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + m + '-' + d+' '+ h + ':' + i + ':' + s;
    }

    getData = (startDate) => {
        this.setState({
            data: [{
                "address": "学院超市",
                "stay": "1",
                "lng": 116.999249,
                "lat": 33.635306
            },{
                "address": "艺林幼儿园",
                "stay": "2",
                "lng": 117.000004,
                "lat": 33.634945
            },{
                "address": "实验中学",
                "stay": "1",
                "lng": 117.001342,
                "lat": 33.636974
            },{
                "address": "篮球场",
                "stay": "1",
                "lng": 117.001306,
                "lat": 33.635577
            },{
                "address": "学院超市",
                "stay": "1",
                "lng": 116.999249,
                "lat": 33.635306
            },{
                "address": "实验中学",
                "stay": "1",
                "lng": 117.001342,
                "lat": 33.636974
            }],
            trajectory: [{
                startDate: '2019-11-01 12:12:12',
                address: '学院超市',
                remark: '111',
                id: 1,
            },{
                startDate: '2019-11-02 12:13:12',
                address: '艺林幼儿园',
                remark: '222',
                id: 2,
            },{
                startDate: '2019-11-03 12:14:12',
                address: '实验中学',
                remark: '333',
                id: 3,
            },{
                startDate: '2019-11-04 12:15:12',
                address: '篮球场',
                remark: '444',
                id: 4,
            },{
                startDate: '2019-11-05 12:16:12',
                address: '学院超市',
                remark: '555',
                id: 5,
            },{
                startDate: '2019-11-06 12:17:12',
                address: '实验中学',
                remark: '666',
                id: 6,
            }]
        })
        // let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo;
        // postAction(
        //     "/bigdata/gisStudentTrace/findAll",
        //     {
        //         "studentNo": _studentNo,
        //         "startDate": startDate
        //     }
        // ).then(
        //     (res) => {
        //         if (res.success && res.obj.length > 0) {
        //             let pageInfo = res.obj;
        //             let newData = [];
        //             let trajectoryData = []

        //             pageInfo.forEach((item) => {

        //                 if (item.coor ) {
        //                     newData.push(
        //                         {
        //                             lng: item.coor ? item.coor.split(",")[0] : null,    //经度
        //                             lat: item.coor ? item.coor.split(",")[1] : null,     //纬度
        //                             // stay: item.startDate ? item.startDate : "",
        //                             address: item.address
        //                         }
        //                     )
        //                 } else {
        //                     newData.push(
        //                         {
        //                             lng: 118.8264800000,    //经度
        //                             lat: 31.8939740000,     //纬度
        //                             // stay: item.startDate ? item.startDate : "",
        //                             address: item.address
        //                         }
        //                     )
        //                 }

        //                 trajectoryData.push({
        //                     startDate: item.startDate ? this.formatDateTime(item.startDate) : "暂无",
        //                     address: item.address,
        //                     remark: item.remark,
        //                     id: item.id
        //                 })
        //             })
        //             this.setState({ data: newData, trajectory: trajectoryData });
        //         }
        //     }
        // )
    }

    render() {
        // let student = JSON.parse(localStorage.getItem("studentItem")).studentName;
        let student = '高展';
        const { data, trajectory } = this.state;
        return (
            <Card
                className={styles.mainCard}
                title={<div className={styles.cardTitle}>学生轨迹分析</div>}
                bordered={false}
                headStyle={{ border: 'none' }}
            >
                <Row gutter={15}>
                    <Col span={18}>
                        <PathMap data={data} name={student} initMap={(map) => {
                                map.enableScrollWheelZoom(true);
                                map.centerAndZoom(new window.BMap.Point(117.000554,33.635439), 18);
                                map.setCurrentCity("宿州");
                            }}
                        />
                    </Col>
                    <Col span={6}>
                        <DatePicker
                            onChange={this.onChange.bind(this)} 
                            format={"YYYY-MM-DD"}
                            disabledDate={this.disabledDate.bind(this,this.state.date)}
                            style={{ width:'100%' }} />
                        <Timeline style={{ height: 508, padding: '20px 20px 0', overflowY: 'scroll' }}>
                            {
                                trajectory && trajectory[0]
                                ?
                                trajectory.map(({ startDate, address, remark, id }) => (
                                    <Timeline.Item key={id}>
                                        <p>{startDate}</p>
                                        <p>{address}</p>
                                        <p>轨迹分析：{remark}</p>
                                    </Timeline.Item>
                                ))
                                :
                                <div style={{ marginTop: 210}}>暂无轨迹</div>
                            }
                        </Timeline>
                    </Col>
                </Row>
            </Card>
        )
    }
}