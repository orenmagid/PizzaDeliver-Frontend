import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { themeColors } from '../constants'

class LoginForm extends React.Component {
  render() {
    const { handleLogin, createNewUser } = this.props
    return (
      <React.Fragment>
        <div
          style={{
            margin: 'auto',
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '300px',
            justifyContent: 'space-between',
            color: themeColors.textColor,
            textAlign: 'center'
          }}
        >
          <h2
            style={{
              color: themeColors.secondaryColor,
              textAlign: 'center'
            }}
          >
            Log-in to your account
          </h2>

          <form onSubmit={handleLogin}>
            <label style={{ display: 'block', margin: '1rem' }}>
              Username:
              <input
                type="text"
                name="username"
                placeholder="Username"
                style={{ marginLeft: '1rem' }}
              />
            </label>

            <label style={{ display: 'block', margin: '1rem' }}>
              Password:
              <input
                type="password"
                name="password"
                placeholder="Password"
                style={{ marginLeft: '1rem' }}
              />
            </label>
            <Button
              $as={'button'}
              type={'submit'}
              block={true}
              color={themeColors.primaryColor}
              style={{ margin: 'auto' }}
            >
              Login
            </Button>
          </form>

          <div>
            New to us?
            <Link
              to={`/new_user`}
              style={{
                textDecoration: 'none',
                color: themeColors.secondaryColor
              }}
            >
              <div style={{ marginTop: '1rem' }} onClick={createNewUser}>
                Sign Up
              </div>
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginForm
