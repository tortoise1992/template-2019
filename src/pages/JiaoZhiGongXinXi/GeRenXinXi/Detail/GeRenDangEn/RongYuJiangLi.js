import React, { Component } from 'react'
import { Table} from 'antd';
export default class RongYuJiangLi extends Component {
    state={
        dataSource:[
            {
                sortIndex:1,
                key:1,
                time:"2019.05.05",
                rewardName:"优秀青年奖",
                level:"社会级",
                grade:"一等奖",
                unit:'xx协会'
            }
        ],
        columns:[
            { title: '序号', dataIndex: 'sortIndex', key: 'sortIndex', width: '6%', align: 'center' },
            { title: '时间', dataIndex: 'time', key: 'time', width: '15%', align: 'center' },
            { title: '奖项名称', dataIndex: 'rewardName', key: 'rewardName', width: '15%', align: 'center' },
            { title: '奖项级别', dataIndex: 'level', key: 'level', width: '15%', align: 'center' },
            { title: '奖项等级', dataIndex: 'grade', key: 'grade', width: '10%', align: 'center' },
            { title: '颁发机构', dataIndex: 'unit', key: 'unit', width: '10%', align: 'center' },
            
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
