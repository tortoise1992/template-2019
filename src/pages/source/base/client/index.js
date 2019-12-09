/**
 *
 * Routes:
 *   - ./src/routes/PrivateRoute.js 
 */
import React, { Component, Fragment } from 'react'
import { Row } from 'antd'
import Filter from './components/Filter'
import Content from './components/Content'
export default class Client extends Component {

	render() {
		return (
			<Fragment>
				<Row>
					<Filter/>
				</Row>
				<Row>
					<Content/>
				</Row>				
			</Fragment>
		)
	}
}
