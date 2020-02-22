import React, { Component } from 'react'
import { Table} from 'antd';

export default class XiaoNeiDiaoDong extends Component {
    state={
        dataSource:[
            {
                sortIndex:1,
                key:1,
                time:"2019.05.05",
                change_job:"xx岗位",
            }
        ],
        columns:[
            { title: '序号', dataIndex: 'sortIndex', key: 'sortIndex', width: '6%', align: 'center' },
            { title: '时间', dataIndex: 'time', key: 'time', width: '15%', align: 'center' },
            { title: '调动岗位', dataIndex: 'change_job', key: 'change_job', width: '15%', align: 'center' },
            
        ],
    }
    
    render() {
        return (
            <div>
               <Table
                    dataSource={this.state.dataSource}
                    pagination={false}
                    columns={this.state.columns}
                    bordered={true}
                    size="middle"
                /> 
            </div>
        )
    }
}
