import React, { PureComponent } from 'react'

export default class OrderItem extends PureComponent {
  render() {
    const { fullOrderItem, i } = this.props
    if (i === 0) {
      return (
        <>
          <td
            style={{
              width: '125px',
              textAlign: 'center'
            }}
          >
            {' '}
            {fullOrderItem.name}
          </td>
          <td
            style={{
              width: '50px',
              textAlign: 'center'
            }}
          >
            ${fullOrderItem.price}
          </td>
          <td
            style={{
              width: '50px',
              textAlign: 'center'
            }}
          >
            {fullOrderItem.quantity.toString()}
          </td>
        </>
      )
    } else {
      return null
    }
  }
}
