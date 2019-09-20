import React, {Component, Suspense} from "react";
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import LeftMenu from './leftMenu';
import TopBread from './topBread';
import styles from './index.module.less';

//首页
const HomePage = React.lazy(() => import('./homePage'))


// 路由
class OtherPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed:true
        }
    }
    _toggleMenu = () => {
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    render() {
        return (
            <div className={styles.otherPageContainer}>
                <div className={styles.leftMenu}>
                    <LeftMenu collapsed={this.state.collapsed}/>
                </div>
                <div className={styles.rightContent}>
                    <TopBread toggleMenu={this._toggleMenu} collapsed={this.state.collapsed}/>
                    <div className={styles.content}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                {/* 首页 */}
                                <Route path="/homePage" exact component={HomePage}/>
                                
                                {/*页面重定向*/}
                                <Route path="/" render={(props) => <Redirect to='/homePage'/>}/>
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(OtherPage);