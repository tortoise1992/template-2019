/**
 * 
 * Routes:
 *   - ./src/routes/PrivateRoute.js 
 */
import React, { Component,Fragment } from 'react'
import Blocks from './components/blocks'
import { Card } from 'antd'
import UserCount from './components/userCount'
import ArticleTable from './components/articleTable'
export default class Home extends Component {  
  render() {
    return (
      <Fragment>
        <Blocks></Blocks>
        <Card title='每周用户' style={{marginTop:20}}>
          <UserCount></UserCount>
        </Card>
        <Card title='近期文章列表' style={{marginTop:20}}>
          <ArticleTable></ArticleTable>
        </Card>
      </Fragment>
    )
  }
}
