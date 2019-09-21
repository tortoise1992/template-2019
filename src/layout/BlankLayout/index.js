import React, { Component,Fragment } from 'react'
export default class Index extends Component {
    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}
