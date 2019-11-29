import React, { Component, Fragment } from 'react'
import { Col, Statistic, Card, Icon } from 'antd'
export default class Qukuai extends Component {
  render() {
    return (
      <Fragment>
        <Col span={6}>
          <Card>
            <Statistic
              title="订单总数"
              value={141}
              valueStyle={{ color: '#3f8600' }}
              prefix={<Icon type="profile" />}
              suffix="个"
            />
          </Card>

        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="销售总额"
              value={141}
              valueStyle={{ color: '#3f8600' }}
              prefix={<Icon type="wallet" />}
              suffix="元"
            />
          </Card>

        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="客户总数"
              value={141}
              valueStyle={{ color: '#3f8600' }}
              prefix={<Icon type="gold" />}
              suffix="个"
            />
          </Card>

        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="在线客户"
              value={141}
              valueStyle={{ color: '#3f8600' }}
              prefix={<Icon type="user" />}
              suffix="个"
            />
          </Card>

        </Col>
      </Fragment>
    )
  }
}
