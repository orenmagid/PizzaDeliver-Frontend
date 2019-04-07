import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { themeColors } from '../../constants'
import Button from '../Button/Button'
import styles from './styles'
import { styled } from 'styletron-react'

const NavbarContainer = styled('div', styles.navbar)
const NavbarContent = styled('div', styles.navbarContent)

export default class Navbar extends PureComponent {
  render() {
    const { handleLogout } = this.props
    return (
      <NavbarContainer>
        <NavbarContent>
          <div style={{ alignSelf: 'center' }}>
            <Link
              to={`/`}
              style={{
                color: themeColors.secondaryColor,
                textDecoration: 'none'
              }}
            >
              <h1 style={{ textTransform: 'capitalize' }}>CHRONICLE PIZZA</h1>
            </Link>
          </div>
          <div style={{ alignSelf: 'center' }}>
            {!localStorage.token ? (
              <Button
                $as={Link}
                to={`/login`}
                color={themeColors.secondaryColor}
              >
                Login
              </Button>
            ) : null}

            {localStorage.token ? (
              <Button
                $as={Link}
                to={`/`}
                onClick={handleLogout}
                color={themeColors.secondaryColor}
              >
                Logout
              </Button>
            ) : null}
          </div>
        </NavbarContent>
      </NavbarContainer>
    )
  }
}
