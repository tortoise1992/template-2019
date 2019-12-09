import React, { Component,Fragment } from 'react'
import { Alert,Button,Input,Table,message } from 'antd'
import MapModal from './map'
export default class Naddress extends Component {
    state={
        BMap:null,
        searchWord:'',
        resultList:[],
        mapVisible:false,
        editData:{}
    }
    componentDidMount() {
        if(window.BMap){
            this.setState({
                BMap:window.BMap
            })
        }
    }
    handleChange=(e)=>{
        this.setState({
            searchWord:e.target.value
        })
    }
    handleSearch=()=>{
        if(!this.state.searchWord){
            message.error('地址不能为空')
        }else{
            let address=this.state.searchWord,BMap=this.state.BMap,self=this        
            // 创建地址解析器实例
            var myGeo = new BMap.Geocoder();
            // 将地址解析结果显示在地图上,并调整地图视野
            myGeo.getPoint(address, function(point){
                if (point) {
                    message.success('查询成功')
                    let item={
                        address,
                        lng:point.lng,
                        lat:point.lat
                    }
                    let originData=JSON.parse(JSON.stringify(self.state.resultList))
                    originData.push(item)
                    originData=originData.map((item,index)=>{
                        item.key=index+1
                        return item
                    })
                    self.setState({
                        resultList:originData,
                        searchWord:''
                    })
                    // lng经度，lat纬度
                    // 将解析的结果存入列表中
                }else{
                    message.error("您输入的地址没有解析到结果!");
                }
            }, "");
        }
    }
    handleReset=()=>{
        this.setState({
            searchWord:''
        })
    }
    handleClear=()=>{
        this.setState({
            resultList:[]
        })
    }   
    componentWillUnmount(){
        this.setState({
            BMap:null
        })
    }
    handleOpenMap=(data)=>{
        this.setState({
            mapVisible:true,
            editData:data
        })
    }
    handleCancel=()=>{
        this.setState({
            mapVisible:false
        })
    }
    handleOk=()=>{
        this.setState({
            mapVisible:false
        })
    }
    render() {
        const columns=[
            {
                title:'序号',
                dataIndex:'key'
            },
            {
                title:'地址',
                dataIndex:'address'
            },
            {
                title:'经度',
                dataIndex:'lng'
            },
            {
                title:'纬度',
                dataIndex:'lat'
            }
            // ,
            // {
            //     title:'操作',
            //     render:(text,record)=>{
            //         return <Button onClick={()=>{this.handleOpenMap(record)}} size='small' type='primary'>查看地图</Button>
            //     }
            // }
        ]
        return (
            <Fragment>
                {
                    this.state.BMap?
                    <div>
                        <div>
                            <Input value={this.state.searchWord} placeholder='请输入地址' onChange={this.handleChange} style={{marginBottom:20}}/>
                            <Button type='primary' icon='search' style={{marginRight:10}} onClick={this.handleSearch}>查询</Button>
                            <Button type='primary' icon='redo' style={{marginRight:10}} onClick={this.handleReset}>重置</Button>
                            <Button type='primary' icon='delete' onClick={this.handleClear}>清空列表</Button>
                        </div>
                        <Table style={{marginTop:20}} columns={columns} dataSource={this.state.resultList}>

                        </Table>
                        {
                            this.state.mapVisible?<MapModal 
                            mapVisible={this.state.mapVisible}
                            handleOk={this.handleOk}
                            handleCancel={this.handleCancel}
                            BMap={this.state.BMap}
                            data={this.state.editData}
                            ></MapModal>:null                            
                        }
                    </div>
                    :<Alert
                    message="警告"
                    description="百度地图API配置存在问题！"
                    type="error"
                    />
                }
                
            </Fragment>
        )
    }
}
