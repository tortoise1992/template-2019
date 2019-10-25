import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider  } from 'antd';
import 'moment/locale/zh-cn';
import { Row,Col,Card } from 'antd'
class App extends React.Component {    
    render(){
        return (
            <ConfigProvider  locale={zhCN}>
                <div style={{padding:15,backgroundColor:'#f4f4f4',width:'100vw',height:'100vh',overflow:'auto'}}>
                    <Row gutter={15} style={{marginBottom:15}}>
                        <Col span={12}>
                            <Card title='表格'>

                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title='树'>

                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={15}>
                        <Col span={12}>
                            <Card title='表格'>

                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title='树'>

                            </Card>
                        </Col>
                    </Row>
                </div>
                                           
            </ConfigProvider >
        );
    }
} 
const render = Component =>{
    ReactDOM.render(
        <Component/>,
        document.getElementById('root')
    );
}

if (module.hot) {
    module.hot.accept(() => {
        render(App);
    })
}

render(App);