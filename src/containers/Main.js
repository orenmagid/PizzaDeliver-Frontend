import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Orders from '../components/Orders'
import { themeColors } from '../constants'
import { baseUrl } from '../constants'

export default class Main extends Component {
  render() {
    const { orders } = this.props
    return (
      <>
        <Orders orders={orders} />
        <div style={{ margin: 'auto' }}>
          <Button
            $as={Link}
            to={`/place-order`}
            color={themeColors.secondaryColor}
          >
            Place an Order!
          </Button>
        </div>
      </>
    )
  }
}
