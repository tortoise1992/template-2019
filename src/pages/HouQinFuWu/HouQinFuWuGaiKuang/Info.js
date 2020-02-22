import React, { Component } from 'react';
import { Row, Col } from 'antd';
// import { postAction } from "src/axios"
import styles from '../index.module.less';

export default class Info extends Component {

    state = {
        RoomNum: 5000,
        BedNum: 20000,
        StayNum: 16000
    }

    componentDidMount() {
        // this.getCountTotalBook();
        // this.getCountOnLineBook();
        // this.getCountAvgBook();
    }

    //累计借阅图书
    getCountTotalBook() {
        // let studentNo = JSON.parse(localStorage.getItem("studentItem")).student_no;
        // postAction('/bigdata/book/countTotalBook',{studentNo}).then((res) => {
        //     if (res.success) {
        //         this.setState({
        //             TotalBook: (res.obj && res.obj[0] && res.obj[0].num) || 0
        //         })
        //     }
        // })
    }

    //在借阅图书
    getCountOnLineBook() {
        // let studentNo = JSON.parse(localStorage.getItem("studentItem")).student_no;
        // postAction('/bigdata/book/countOnLineBook',{studentNo}).then((res) => {
        //     if (res.success) {
        //         this.setState({
        //             OnLineBook: (res.obj && res.obj[0] && res.obj[0].num) || 0
        //         })
        //     }
        // })
    }

    //月平均借阅图书
    getCountAvgBook() {
        // let studentNo = JSON.parse(localStorage.getItem("studentItem")).student_no;
        // postAction('/bigdata/book/countAvgBook',{studentNo}).then((res) => {
        //     if (res.success) {
        //         this.setState({
        //             AvgBook: (res.obj && res.obj[0] && res.obj[0].num) || 0
        //         })
        //     }
        // })
    }

    //导出明细
    handleMingxi=()=>{
        // let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo;
        // let year = new Date().getFullYear();
        // window.location.href=`${hostUrl}/bigdata/book/exportBookBorrowDist?borrowCode=${_studentNo}&year=${year}`;
    }

    render() {
        const { RoomNum, BedNum, StayNum } = this.state
        return (
            <Row gutter={15} style={{marginBottom: 15}}>
                <Col span={8}>
                    <div className={styles.introBox}>
                        <p><span>{RoomNum}</span>个</p>
                        <p>累计房间数</p>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={styles.introBox}>
                        <p><span>{BedNum}</span>个</p>
                        <p>累计床位数</p>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={styles.introBox}>
                        <p><span>{StayNum}</span>个</p>
                        <p>累计住宿人数</p>
                    </div>
                </Col>
            </Row>
        )
    }
}