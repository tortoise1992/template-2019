import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider  } from 'antd';
import 'moment/locale/zh-cn';
import FormDesign from './FormDesign'
// import { Row,Col,Card } from 'antd'
class App extends React.Component {    
    render(){
        return (
            <ConfigProvider  locale={zhCN}>
                <FormDesign/>
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