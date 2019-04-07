import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { themeColors, textColors } from '../../constants'
import styles from './styles'
import { styled } from 'styletron-react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import NewAddressForm from '../NewAddressForm'
import { baseUrl } from '../../constants'

const Form = styled('form', styles.form)
const Table = styled('div', styles.table)
const TableHeader = styled('div', styles.tableHeader)
const TableRow = styled('div', styles.tableRow)
const TableCell = styled('div', styles.tableCell)
const Field = styled('label', styles.field)
const Row = styled('div', styles.row)

export default class OrderForm extends PureComponent {
  state = {
    order: [],
    showCreateAddress: false,
    newAddress: '',
    orderAddress: '',
    pizzaTypes: [],
    user: { addresses: [] }
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      fetch(baseUrl + '/pizza_types', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(pizzaTypes => {
          console.log(pizzaTypes)
          this.setState({ pizzaTypes })
        })
      fetch(baseUrl + '/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(user => {
          console.log('TCL: OrderForm -> componentDidMount -> user', user)
          this.setState({ user })
        })
        .catch(e => console.error(e))
    }
  }

  handleSelectPizzaType = pizzaType => {
    const { order } = this.state
    const newItem = {
      pizza_type_id: pizzaType.id,
      quantity: 1
    }

    const updatedOrder = [...order, newItem]
    this.setState({
      order: updatedOrder
    })
  }

  handleSelectAddress = address => {
    this.setState({ orderAddress: address, showCreateAddress: false })
  }

  handleVerifyAddress = () => {
    const { newAddress } = this.state
    const data = { address: { location: newAddress } }
    let token = localStorage.getItem('token')
    if (token) {
      fetch(baseUrl + '/addresses', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(addressResponse => {
          console.log(
            'TCL: OrderForm -> handleVerifyAddress -> addressResponse',
            addressResponse
          )
          if (addressResponse.errors) {
            this.setState({
              newAddress: '',
              showCreateAddress: false
            })
            alert(addressResponse.errors)
            return
          } else {
            this.setState({
              showCreateAddress: false,
              orderAddress: addressResponse
            })
          }
        })
    }
  }
  handleChangeAddress = () => {
    this.setState({
      showCreateAddress: true,
      orderAddress: ''
    })
  }

  handleChange = e => {
    const address = e.target.value
    this.setState({ newAddress: address })
  }
  render() {
    const {
      pizzaTypes,
      order,
      orderAddress,
      user,
      showCreateAddress,
      newAddress
    } = this.state
    const { handlePlaceOrder, handleCancelOrder } = this.props
    return (
      <Form>
        <Row style={{ justifyContent: 'center' }}>
          <Field>
            <Dropdown
              Component={
                <Button color={themeColors.tertiaryColor}>
                  Select Pizza Type
                </Button>
              }
            >
              {pizzaTypes.map((pt, i) => {
                return (
                  <Dropdown.Item
                    key={i}
                    onClick={() => this.handleSelectPizzaType(pt)}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '170px'
                      }}
                    >
                      <span>{pt.name}</span>
                      <span>${pt.price}</span>
                    </div>
                  </Dropdown.Item>
                )
              })}
            </Dropdown>
          </Field>
        </Row>
        <Row>
          <Table>
            <TableRow>
              <TableHeader>Pizza</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>Quantity</TableHeader>
            </TableRow>

            {order.map((orderItem, i) => {
              const pizzaType = pizzaTypes.find(
                pt => pt.id === orderItem.pizza_type_id
              )
              return (
                <TableRow key={i}>
                  <TableCell>{pizzaType.name}</TableCell>
                  <TableCell>${pizzaType.price}</TableCell>
                  <TableCell>{orderItem.quantity}</TableCell>
                </TableRow>
              )
            })}
          </Table>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
          {orderAddress ? (
            <div
              style={{
                border: `1px solid ${themeColors.primaryColor}`,
                padding: '1rem',
                color: textColors.textMuted,
                textAlign: 'center'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <strong>{orderAddress.location}</strong>
              </div>
              <div>
                Latitude: {orderAddress.latitude}, Longitude:{' '}
                {orderAddress.longitude}
              </div>
            </div>
          ) : null}
          {showCreateAddress ? (
            <NewAddressForm
              handleVerifyAddress={this.handleVerifyAddress}
              handleChange={this.handleChange}
              newAddress={newAddress}
            />
          ) : null}
        </Row>
        <Row style={{ justifyContent: 'center' }}>
          <Dropdown
            Component={
              <Button
                handleChange={this.handleAddressChange}
                color={themeColors.secondaryColor}
              >
                Select Address
              </Button>
            }
          >
            {user.addresses.map((address, i) => {
              return (
                <Dropdown.Item
                  key={i}
                  onClick={() => this.handleSelectAddress(address)}
                >
                  {address.location}
                </Dropdown.Item>
              )
            })}
            <Dropdown.Item>
              <Button
                onClick={this.handleChangeAddress}
                color={themeColors.primaryColor}
                size={'sm'}
              >
                Create New Address
              </Button>
            </Dropdown.Item>
          </Dropdown>
        </Row>
        <Row
          style={{
            justifyContent: 'space-between'
          }}
        >
          <Button
            outline={true}
            color={themeColors.primaryColor}
            onClick={handleCancelOrder}
          >
            Cancel Order
          </Button>

          <Button
            $as={Link}
            to={'/'}
            onClick={() => handlePlaceOrder(order, orderAddress)}
            color={themeColors.primaryColor}
            type={'submit'}
          >
            Submit Order
          </Button>
        </Row>
      </Form>
    )
  }
}
