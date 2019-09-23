import React from 'react';
import { Redirect } from 'react-router-dom';
export default Wrapper => hocProps => {
    const { component: Component, ...rest } = hocProps;
    const user = localStorage.getItem('userInfo');
    return (
        <Wrapper {...rest} component={ props => {
            return user
                ? <Component {...props} />
                : <Redirect to="/login" />
        } } />
    );
}
