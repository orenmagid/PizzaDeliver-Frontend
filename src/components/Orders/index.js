import React, { Component } from 'react'
import AdditionalOrderItem from './AdditionalOrderItem'
import { themeColors, textColors } from '../../constants'
import { formatDate } from '../../utils/date'
import OrderItem from './OrderItem'

export default class Orders extends Component {
  renderOrderItems = (order, orderItem) => {
    const pizzaTypes = order.pizza_types

    const pizzaType = pizzaTypes.find(pt => pt.id === orderItem.pizza_type_id)

    return { ...orderItem, name: pizzaType.name, price: pizzaType.price }
  }

  render() {
    const { orders } = this.props

    if (orders.length === 0) {
      return null
    }

    return (
      <div
        style={{
          margin: 'auto',
          width: '1000px',
          height: '300px',
          overflow: 'scroll'
        }}
      >
        <table
          style={{
            margin: 'auto',
            padding: '3rem',
            background: themeColors.tertiaryColor,
            color: themeColors.quinaryColor,
            borderRadius: '.25rem',
            border: `2px solid ${themeColors.secondaryColor}`
          }}
        >
          <tr style={{ height: '2rem' }}>
            <th
              style={{
                width: '50px',
                padding: '.5rem',
                borderBottom: `1px solid ${themeColors.quaternaryColor}`
              }}
            >
              Date
            </th>
            <th
              style={{
                width: '100px',
                borderBottom: `1px solid ${themeColors.quaternaryColor}`
              }}
            >
              First Name
            </th>
            <th
              style={{
                width: '100px',
                padding: '.5rem',
                borderBottom: `1px solid ${themeColors.quaternaryColor}`
              }}
            >
              Last Name
            </th>
            <th
              style={{
                width: '400px',
                padding: '.5rem',
                borderBottom: `1px solid ${themeColors.quaternaryColor}`
              }}
            >
              Address
            </th>
            <th
              style={{
                width: '50px',
                padding: '.5rem',
                borderBottom: `1px solid ${themeColors.quaternaryColor}`
              }}
            >
              Discount
            </th>
            <th
              style={{
                width: '50px',
                padding: '.5rem',
                borderBottom: `1px solid ${themeColors.quaternaryColor}`
              }}
            >
              Tax
            </th>
            <th
              style={{
                width: '50px',
                padding: '.5rem',
                borderBottom: `1px solid ${themeColors.quaternaryColor}`
              }}
            >
              Total
            </th>
            <th
              style={{
                width: '125px',
                padding: '.5rem',
                borderBottom: `1px solid ${themeColors.quaternaryColor}`
              }}
            >
              Item
            </th>
            <th
              style={{
                width: '50px',
                padding: '.5rem',
                borderBottom: `1px solid ${themeColors.quaternaryColor}`
              }}
            >
              Price
            </th>
            <th
              style={{
                width: '50px',
                padding: '.5rem',
                borderBottom: `1px solid ${themeColors.quaternaryColor}`
              }}
            >
              Quantity
            </th>
          </tr>

          {orders.map((order, i) => {
            const currentDate = new Date()
            const orderDate = new Date(order.date_time)
            const color =
              currentDate - orderDate > 46767835
                ? textColors.textMuted
                : textColors.textPrimary

            return (
              <>
                <tr key={i} style={{ height: '2rem', color: `${color}` }}>
                  {' '}
                  <td
                    style={{
                      width: '50px',
                      textAlign: 'center'
                    }}
                  >
                    {formatDate(orderDate)}
                  </td>
                  <td style={{ width: '100px', textAlign: 'center' }}>
                    {order.user.first_name}
                  </td>
                  <td style={{ width: '100px', textAlign: 'center' }}>
                    {order.user.last_name}
                  </td>
                  <td style={{ width: '400px', textAlign: 'center' }}>
                    {order.address.location}
                  </td>
                  <td style={{ width: '50px', textAlign: 'center' }}>
                    {order.discount * 100}%
                  </td>
                  <td style={{ width: '50px', textAlign: 'center' }}>
                    ${order.tax}
                  </td>
                  <td style={{ width: '50px', textAlign: 'center' }}>
                    ${order.total}
                  </td>
                  {order.order_items.map((orderItem, i) => {
                    const fullOrderItem = this.renderOrderItems(
                      order,
                      orderItem
                    )
                    if (i === 0)
                      return <OrderItem fullOrderItem={fullOrderItem} i={i} />
                  })}
                </tr>
                {order.order_items.map((orderItem, i) => {
                  const fullOrderItem = this.renderOrderItems(order, orderItem)
                  return (
                    <AdditionalOrderItem
                      fullOrderItem={fullOrderItem}
                      i={i}
                      color={color}
                    />
                  )
                })}
              </>
            )
          })}
        </table>
      </div>
    )
  }
}
