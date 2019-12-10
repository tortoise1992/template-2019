/**
 *
 * Routes:
 *   - ./src/routes/PrivateRoute.js 
 */
import React, { Component, Fragment } from 'react'
import { Row } from 'antd'
import Filter from './components/Filter'
import Content from './components/Content'
export default class Goods extends Component {
	state={
		filterValue:null
	}
	changeFilter=(value)=>{
		this.setState({
			filterValue:value
		})
	}
	render() {
		let {filterValue}=this.state
		return (
			<Fragment>
				<Row>
					<Filter changeFilter={this.changeFilter}/>
				</Row>
				<Row>
					<Content filterValue={filterValue}/>
				</Row>				
			</Fragment>
		)
	}
}
