import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider  } from 'antd';
import {HashRouter as Router} from 'react-router-dom'
import 'moment/locale/zh-cn';
import './reset.less';
import RouterPage from './route'
class App extends React.Component {    
    render(){
        return (
            <ConfigProvider  locale={zhCN}>
                <Router>
                    <RouterPage/>
                </Router>                               
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