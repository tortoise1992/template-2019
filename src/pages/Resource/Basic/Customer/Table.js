import React, { Component } from 'react'
import { Table, message } from 'antd'
import ExportJsonExcel from 'js-export-excel'
export default class MTable extends Component {
    state = {
        data: [],
        pagination: {
            current: 1,
            pageSize: 10,
            total: 0,
            showTotal: (total) => (`共${total}条数据`),
            showQuickJumper: true
        }
    }
    componentDidMount() {
        this.getData()
        // 传递当前组件的示例到父级供兄弟组件调用
        this.props.transformIns(this)
    }
    getData = () => {
        let params = { ...this.props.filterValue, ...this.state.pagination }
        message.info(`请求成功，参数是：${JSON.stringify(params)}`)

        let res = require('@/data/resource/basic/customer/list.json')
        if (res.success) {
            let pagination = {
                ...this.state.pagination,
                current: res.obj.page,
                pageSize: res.obj.pageSize,
                total: res.obj.total
            }
            let data = res.obj.rows.map((item, index) => {
                item.key = index + 1
                return item
            })
            this.setState({
                data,
                pagination
            })
        }
    }
    handleTableChange = (pagination) => {
        this.setState({
            pagination
        }, () => {
            this.getData()
        })
    }
    handleExportExcel = () => {
        let {data}=this.state,{columns}=this.props
        columns=columns.filter(item=>item.dataIndex && item.dataIndex !== 'key')
        let sheetHeader=columns.map(item=>item.title)
        let option = {};
        let dataTable = [];
        if (data) {
            for (let i in data) {
                if (data) {
                    let obj = {}
                    columns.forEach(item=>{
                        obj[item.title]=data[i][item.dataIndex] || ''
                    })
                    dataTable.push(obj);
                }
            }
        }
        option.fileName = '客户信息'
        option.datas = [
            {
                sheetData: dataTable,
                sheetName: 'sheet',
                sheetFilter: sheetHeader,
                sheetHeader: sheetHeader,
            }
        ];
        var toExcel = new ExportJsonExcel(option);
        toExcel.saveExcel()
    }
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.filterValue) !== JSON.stringify(this.props.filterValue)) {
            this.getData()
        }
    }
    render() {
        const { data, pagination } = this.state
        const { columns } = this.props
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.props.changeSelected(selectedRowKeys)
            }
        }
        return (
            <div className='padding'>
                <Table
                    dataSource={data}
                    columns={columns}
                    pagination={pagination}
                    onChange={this.handleTableChange}
                    rowSelection={rowSelection}
                >
                </Table>
            </div>

        )
    }
}
