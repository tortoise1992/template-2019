import React, { Component } from 'react'
import {Table} from 'antd';
export default class XueXiJingLi extends Component {
    state={
        dataSource:[
            {
                sortIndex:1,
                key:1,
                time:"2019.05.05",
                shoolName:"zhangsan",
                major:"计算机科学与技术",
                education:"研究生",
                degree:'硕士'
            }
        ],
        columns:[
            { title: '序号', dataIndex: 'sortIndex', key: 'sortIndex', width: '6%', align: 'center' },
            { title: '时间', dataIndex: 'time', key: 'time', width: '15%', align: 'center' },
            { title: '学校名称', dataIndex: 'shoolName', key: 'shoolName', width: '15%', align: 'center' },
            { title: '专业', dataIndex: 'major', key: 'major', width: '15%', align: 'center' },
            { title: '学历', dataIndex: 'education', key: 'education', width: '10%', align: 'center' },
            { title: '学位', dataIndex: 'degree', key: 'degree', width: '10%', align: 'center' },
            
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
