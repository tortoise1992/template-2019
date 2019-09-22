import React, { Component,Suspense } from 'react'
import {Switch,Route} from 'react-router-dom'
import Auth from './Auth'
const AuthorizeRoute=Auth(Route)

const Nomatch = React.lazy(() => import('@/components/Nomatch'))
const Login = React.lazy(() => import('@/pages/Login'))
const Home = React.lazy(() => import('@/pages/Home'))

class RouterPage extends Component {    
   
    render() {     
        
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <AuthorizeRoute path="/admin/home" exact component={Home}/>
                    <AuthorizeRoute  component={Nomatch}/>
                </Switch>
            </Suspense>           
                
           )
    }
}

export default RouterPage
