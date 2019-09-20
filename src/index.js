import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import './index.less';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider  } from 'antd';

import 'moment/locale/zh-cn';

import RouterPage from './pages';
import Login from './login';
import Loading from './loading';

class App extends React.Component {
    render(){
        let loginStatus = window.localStorage.getItem("loginStatus");//从cookie中取登录状态
        return (
            <ConfigProvider  locale={zhCN}>
                    <Router>
                        <React.Fragment>
                            {
                                loginStatus==="true"
                                ?
                                <RouterPage/>
                                :
                                <Login/>
                            }
                            <Loading/>
                        </React.Fragment>
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