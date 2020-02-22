import React from 'react';
import { Button,Tooltip } from 'antd';
import html2canvas from 'html2canvas';
import IconFont from 'src/iconfont';

export default class Download extends React.Component {

    downloadChart = () => {
        const { chartIns, title, id, imageType, fillStyle } = this.props.downloadChart;
        if(chartIns){
            const canvas = document.createElement('canvas');
            canvas.height = chartIns.get('canvas')._cfg.el.height;
            canvas.width = chartIns.get('canvas')._cfg.el.width;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = fillStyle || "#fff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(chartIns.get('canvas')._cfg.el, 0, 0);
            var image = canvas.toDataURL(imageType || "image/jpeg");
            var $a = document.createElement('a');
            $a.setAttribute("href", image);
            $a.setAttribute("download", title);
            $a.click();
        } else { //html导出成图片
            if(!id){return}
            html2canvas(document.getElementById(id)).then((canvas) => {
                var image = canvas.toDataURL(this.props.imageType || "image/jpeg");
                var $a = document.createElement('a');
                $a.setAttribute("href", image);
                $a.setAttribute("download",title);
                $a.click();
            });
        }
    }

    downloadDetail = () => {
        this.props.downloadDetail();
    }

    render(){
        return (
            <React.Fragment>
                {
                    this.props.downloadChart ? <span style={{marginLeft:10}} onClick={this.downloadChart}>
                        <Tooltip placement="top" title='导出图表'>
                            <Button theme="outlined" style={{padding:"0px 8px"}}>
                                <IconFont type="icon-daochu1" />
                            </Button>
                        </Tooltip>
                    </span> : null
                }
                {
                    this.props.downloadDetail ? <Tooltip placement="top" title='导出明细'>
                        <Button onClick={this.downloadDetail} style={{marginLeft:10,padding:"0px 8px"}} theme="outlined">
                            <IconFont type="icon-daochu" />
                        </Button>
                    </Tooltip> : null
                }
            </React.Fragment>
        )
    }
}