import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Button from '../components/Button'
import { themeColors } from '../constants'
export default class NewUserForm extends Component {
  render() {
    let { handleCreateOrEditUser } = this.props

    let token = localStorage.getItem('token')
    if (token) {
      return <Redirect to="/" />
    }
    return (
      <div style={{ width: '500px', margin: 'auto' }}>
        <h2
          style={{
            color: themeColors.secondaryColor,
            textAlign: 'center'
          }}
        >
          Log-in to your account
        </h2>

        <form onSubmit={handleCreateOrEditUser}>
          <div
            style={{
              width: '100%',
              margin: '1rem 0',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <input
              style={{
                width: '45%'
              }}
              name="first_name"
              label="First Name"
              placeholder="First Name"
            />
            <input
              style={{
                width: '45%'
              }}
              name="last_name"
              label="Last name"
              placeholder="Last name"
            />
          </div>
          <div
            style={{
              width: '100%',
              margin: '1rem 0',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <input
              style={{
                width: '45%'
              }}
              name="username"
              label="Username"
              placeholder="Username"
            />
            <input
              style={{
                width: '45%'
              }}
              name="email"
              label="Email Address"
              placeholder="Email
                Address"
            />
          </div>
          <div
            style={{
              width: '100%',
              margin: '1rem auto',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <input
              name="password"
              style={{ width: '100%' }}
              label="Password"
              placeholder="Password"
              type="password"
            />
          </div>

          <Button
            block={true}
            color={themeColors.secondaryColor}
            $as={'button'}
          >
            Submit
          </Button>
        </form>
      </div>
    )
  }
}
