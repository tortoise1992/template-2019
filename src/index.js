import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider  } from 'antd';
import 'moment/locale/zh-cn';
import Demo from './Demo'
class App extends React.Component {    
    render(){
        return (
            <ConfigProvider  locale={zhCN}>
                <div style={{backgroundColor:'#f4f4f4',width:'100vw',height:'100vh',boxSizing:'border-box'}}>
                    <Demo/>
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