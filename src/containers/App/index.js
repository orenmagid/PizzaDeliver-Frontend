import React, { Component } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import NavBar from '../../components/Navbar'
import LoginForm from '../../components/LoginForm'
import NewUserForm from '../../components/NewUserForm'
import Main from '../Main'
import OrderForm from '../../components/OrderForm'
import { baseUrl } from '../../constants'
import { styled } from 'styletron-react'
import styles from './styles.js'

const MainContainer = styled('div', styles.main)
const Content = styled('div', styles.content)

class App extends Component {
  state = {
    error: '',
    orders: []
  }

  componentDidMount() {
    this.fetchOrders()
  }

  fetchOrders = () => {
    let token = localStorage.getItem('token')
    if (token) {
      fetch(baseUrl + '/orders', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(orders => {
          console.log(orders)
          this.setState({ orders })
        })
        .catch(e => console.error(e))
    }
  }

  handleCreateUser = e => {
    e.preventDefault()

    let data = {
      user: {
        first_name: e.currentTarget.first_name.value,
        last_name: e.currentTarget.last_name.value,
        username: e.currentTarget.username.value,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value
      }
    }
    console.log(JSON.stringify(data))
    fetch(baseUrl + '/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(newUser => {
        if (newUser.errors) {
          this.displayErrors(newUser.errors)
        } else {
          if (newUser.success) {
            localStorage.setItem('token', newUser.token)

            this.setState({
              error: ''
            })
          }
          window.history.back()
        }
      })
  }

  handleLogin = e => {
    e.preventDefault()

    const { history } = this.props

    const params = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value
    }

    this.setState({ error: '' })

    fetch(baseUrl + '/login', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('TCL: App -> data', data)
        if (data.success) {
          localStorage.setItem('token', data.token)

          this.setState({ error: '' })
          history.push('/place-order')
        } else {
          this.setState({
            error: 'Invalid username or password',
            navBar: 'login'
          })
          alert('Invalid username or password')
        }
      })
  }

  handleLogout = () => {
    const { history } = this.props
    localStorage.clear()
    history.push('/')
  }

  handlePlaceOrder = (orderItems, address) => {
    const fullOrder = {
      order: {
        order_items: orderItems.map(orderItem => {
          return {
            pizza_type_id: orderItem.pizza_type_id,
            quantity: orderItem.quantity
          }
        }),
        date_time: new Date(),
        address_id: address.id
      }
    }

    let token = localStorage.getItem('token')
    if (token) {
      fetch(baseUrl + '/orders', {
        method: 'POST',
        body: JSON.stringify(fullOrder),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(orderResponse => {
          if (orderResponse.errors) {
            alert(orderResponse.errors)
            return
          } else {
            const localOrders = this.state.orders
            const updatedOrders = localOrders.push(orderResponse)
            this.setState({ updatedOrders })
          }
        })
    }
    this.fetchOrders()
  }

  handleCancelOrder = () => {}

  render() {
    const { orders } = this.state
    console.log(window.location.href.includes('login'))

    if (
      localStorage.getItem('token') &&
      window.location.href.includes('login')
    ) {
      return <Redirect to="/" />
    }

    return (
      <MainContainer>
        <NavBar
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
        />

        <Content>
          <Route
            exact
            path="/new_user"
            render={routerProps => (
              <NewUserForm
                handleCreateOrEditUser={this.handleCreateUser}
                displayNewUserForm={this.state.displayNewUserForm}
              />
            )}
          />
          {localStorage.getItem('token') ? null : (
            <Route
              exact
              path="/login"
              render={routerProps => (
                <LoginForm
                  createNewUser={this.createNewUser}
                  handleLogin={this.handleLogin}
                />
              )}
            />
          )}
          {localStorage.getItem('token') ? (
            <>
              <Route
                exact
                path="/"
                render={routerProps => <Main orders={orders} />}
              />
              <Route
                path="/place-order"
                render={routerProps => (
                  <OrderForm
                    handlePlaceOrder={this.handlePlaceOrder}
                    handleCancelOrder={this.handleCancelOrder}
                  />
                )}
              />
            </>
          ) : null}
        </Content>
      </MainContainer>
    )
  }
}

export default withRouter(App)
