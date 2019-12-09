import React, { Component } from 'react'
import { Modal } from 'antd'
export default class MapModal extends Component {
    componentDidMount() {
        // 百度地图API功能
        let BMap=this.props.BMap,data=this.props.data
        let map = new BMap.Map("allmap");
        let point = new BMap.Point(data.lng,data.lat);
        map.centerAndZoom(point, 16);
		map.addOverlay(new BMap.Marker(point));
    }
    
    render() {
        return (
            <Modal 
                visible={this.props.mapVisible}
                title='查看地图'
                onOk={this.props.handleOk}
                onCancel={this.props.handleCancel}
                width={600}
                centered
            >
                <div id="allmap" style={{width:'100%',height:400}}>

                </div>
            </Modal>
        )
    }
}
