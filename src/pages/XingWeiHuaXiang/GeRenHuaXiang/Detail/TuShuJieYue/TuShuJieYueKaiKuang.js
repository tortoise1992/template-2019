import React, { Component } from 'react';
import { Row, Col, Button, Tooltip } from 'antd';
import IconFont from 'src/iconfont';
// import { postAction } from "src/axios"
import styles from '../../index.module.less';

export default class TuShuJieYueKaiKuang extends Component {

    state = {
        TotalBook: { totalCount: 123, totalName: '累计借阅图书' },
        OnLineBook: { totalCount: 234, totalName: '在借图书' },
        AvgBook: { totalCount: 345, totalName: '月均借阅图书' }
    }

    componentDidMount() {
        // this.getCountTotalBook()
        // this.getCountOnLineBook()
        // this.getCountAvgBook()
    }

    //累计借阅图书
    getCountTotalBook() {
        // let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo
        // let year = new Date().getFullYear()
        // postAction(
        //     '/bigdata/book/countTotalBook',
        //     {
        //         studentNo: _studentNo,
        //         year: year
        //     }
        // ).then((res) => {
        //     if (res.success && res.obj.length > 0 && res.obj[0] !== null) {
        //         this.setState({
        //             TotalBook: [
        //                 { totalCount: res.obj[0].num, totalName: '累计借阅图书' },
        //             ]
        //         })
        //     }
        // })
    }

    //在借图书数量
    getCountOnLineBook() {
        // let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo
        // let year = new Date().getFullYear()
        // postAction(
        //     '/bigdata/book/countOnLineBook',
        //     {
        //         studentNo: _studentNo,
        //         year: year
        //     }
        // ).then((res) => {
        //     if (res.success && res.obj.length > 0 && res.obj[0] !== null) {
        //         this.setState({
        //             OnLineBook: [
        //                 { totalCount: res.obj[0].num, totalName: '在借图书' }
        //             ]
        //         })
        //     }
        // })
    }

    //月平均借阅
    getCountAvgBook() {
        // let _studentNo = JSON.parse(localStorage.getItem("studentItem")).studentNo
        // let year = new Date().getFullYear()
        // postAction(
        //     '/bigdata/book/countAvgBook',
        //     {
        //         studentNo: _studentNo,
        //         year: year
        //     }
        // ).then((res) => {
        //     if (res.success && res.obj.length > 0 && res.obj[0] !== null) {
        //         this.setState({
        //             AvgBook: [
        //                 { totalCount: res.obj[0].num, totalName: '月均借阅图书' }
        //             ]
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
        const { TotalBook, OnLineBook, AvgBook } = this.state
        return (
            <Row gutter={15}>
                <Col span={8}>
                    <div className={styles.introBox}>
                        <Tooltip placement="top" title='导出明细'>
                            <Button
                                theme="outlined"
                                className={styles.export}
                                onClick={this.handleMingxi}
                            >
                                <IconFont type="icon-daochu" />
                            </Button>
                        </Tooltip>
                        <p><span>{TotalBook.totalCount}</span>本</p>
                        <p>{TotalBook.totalName}</p>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={styles.introBox}>
                        <p><span>{OnLineBook.totalCount}</span>本</p>
                        <p>{OnLineBook.totalName}</p>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={styles.introBox}>
                        <p><span>{AvgBook.totalCount}</span>本</p>
                        <p>{AvgBook.totalName}</p>
                    </div>
                </Col>
            </Row>
        )
    }
}