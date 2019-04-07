import React, { PureComponent } from 'react'
import { withStyle } from 'styletron-react'
import styles from './styles'

import {
  BaseDropdownItemContainer,
  BaseDropdownItemContent,
  BaseDropdownItemIcon
} from '../Base'

const DropdownItemContainer = withStyle(
  BaseDropdownItemContainer,
  styles.dropdownItemContainer
)
const DropdownItemContent = withStyle(
  BaseDropdownItemContent,
  styles.dropdownItemContent
)
const DropdownItemIcon = withStyle(
  BaseDropdownItemIcon,
  styles.dropdownItemIcon
)

class DropdownItem extends PureComponent {
  render() {
    const { Icon, ...rest } = this.props

    return (
      <DropdownItemContainer {...rest}>
        {Icon ? <DropdownItemIcon $as={Icon} /> : null}
        <DropdownItemContent>{this.props.children}</DropdownItemContent>
      </DropdownItemContainer>
    )
  }
}

export default DropdownItem
