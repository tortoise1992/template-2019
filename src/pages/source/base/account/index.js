/**
 *
 * Routes:
 *   - ./src/routes/PrivateRoute.js 
 */
import React, { Component, Fragment } from 'react'
import { Row } from 'antd'
import Content from './components/Content'
export default class Account extends Component {
	
	render() {
		return (
			<Fragment>
				
				<Row>
					<Content/>
				</Row>				
			</Fragment>
		)
	}
}
