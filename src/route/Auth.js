import React from 'react';
import { Redirect } from 'react-router-dom';
import BasicLayout from '@/layout/BasicLayout'
export default Wrapper => hocProps => {
    const { component: Component, ...rest } = hocProps;
    const user = localStorage.getItem('userInfo');
    return (
        <Wrapper {...rest} component={ props => {
            return user
                ? <BasicLayout><Component {...props} /></BasicLayout>
                : <Redirect to="/login" />
        } } />
    );
}
