import React, { Component } from 'react'
import {Upload, Message} from 'antd';
import IconFont from 'src/iconfont';

export default class UploadImage extends Component {
    state={
        options:{},
        imageUrl:''
    }

    componentDidMount(){
        this.initFileOptions();
    }

    // 初始化上传文件的配置
    initFileOptions = () => {
        const options = {
        name: 'files',
        action: '',
        accept: 'image/jpeg,image/png',
        // onChange: this.handleFileChange,
        beforeUpload: (file, fileList) => {
            // let data = new FormData();
            // data.append('ruleId', 'RULE_4');
            // data.append('year', this.state.defaultYearValue);
            // data.append('file', file);
            // console.log(data)
            // uploadFile('/pyCommonGoalRule/uploadRuleFile',data).then(res => {
            //     if (res.code === '000000') {
            //         Message.success('附件上传成功');
                    
            //         this.setState({
            //             selectedKeys:res.data?[res.data]:[]
            //         }); 
            //         this.queryLeftTree();
            //     } else {
            //         Message.warn(res.message);
            //     }
            // });
            // 设置手动上传
            return false;
        }
        };
        this.setState({ options })
    }
    
    render() {
        const { imageUrl } = this.state;
        return (
            <div>
                <Upload
                  {...this.state.options}
                  showUploadList={false}
                >
                {
                    imageUrl 
                    ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> 
                    : <div style={{width: '212px',height:'258px',backgroundColor:'#E7F3FF',borderRadius:'4px'}}>
                        {/* <Icon type={this.state.loading ? 'loading' : 'plus'} /> */}
                        <IconFont type="icon-camera"/>
                    </div>
                }
                </Upload>
            </div>
        )
    }
}
