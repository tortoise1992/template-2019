import React, { Component,Fragment } from 'react'

export default class BlankLayout extends Component {
  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}
