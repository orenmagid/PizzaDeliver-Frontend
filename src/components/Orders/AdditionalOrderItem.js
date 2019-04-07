import React, { PureComponent } from 'react'

export default class AdditionalOrderItem extends PureComponent {
  render() {
    const { fullOrderItem, i, color } = this.props
    if (i > 0) {
      return (
        <tr key={i} style={{ height: '1.5rem', color: `${color}` }}>
          <td
            style={{
              width: '50px',
              textAlign: 'center'
            }}
          >
            -{' '}
          </td>
          <td style={{ width: '100px', textAlign: 'center' }}>- </td>
          <td style={{ width: '100px', textAlign: 'center' }}>- </td>
          <td style={{ width: '400px', textAlign: 'center' }}>- </td>
          <td style={{ width: '50px', textAlign: 'center' }}>-</td>
          <td style={{ width: '50px', textAlign: 'center' }}>-</td>
          <td style={{ width: '50px', textAlign: 'center' }}>-</td>

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
        </tr>
      )
    } else {
      return null
    }
  }
}
