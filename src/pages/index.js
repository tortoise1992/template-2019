import React, { Component } from 'react'
import withRouter from 'umi/withRouter'
class Index extends Component {
	componentDidMount() {
		this.props.history.replace('/home')
	}
	
	render() {
		return <React.Fragment></React.Fragment>
	}
}

export default withRouter(Index)
