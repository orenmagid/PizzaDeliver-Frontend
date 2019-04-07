import React, { PureComponent } from 'react'
import Publisher from '../../Publisher'

import { withStyle } from 'styletron-react'
import styles from './styles'

import DropdownItem from '../DropdownItem'

import { BaseDropdownContainer, BaseDropdownMenuContainer } from '../Base'

const DropdownContainer = withStyle(
  BaseDropdownContainer,
  styles.dropdownContainer
)
const DropdownMenuContainer = withStyle(
  BaseDropdownMenuContainer,
  styles.dropdownMenuContainer
)

class Dropdown extends PureComponent {
  static Item = DropdownItem

  container = React.createRef()

  state = {
    open: false
  }

  componentDidMount() {
    this.subscriptionKey = Publisher.subscribe('click', this.handleClick)
  }

  componentWillUnmount() {
    Publisher.unsubscribe('click', this.subscriptionKey)
  }

  handleClickInside = e => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  handleClickOutside = e => {
    const { open } = this.state
    if (open) {
      this.setState({ open: false })
    }
  }

  handleClick = e => {
    const { target } = e
    const { current: container } = this.container

    const isContained = container.contains(target)

    if (isContained) {
      this.handleClickInside(e)
    } else {
      this.handleClickOutside(e)
    }
  }

  render() {
    const { open } = this.state
    const { Component, renderComponent, ...rest } = this.props

    return (
      <DropdownContainer $ref={this.container} {...rest}>
        {Component ? Component : renderComponent ? renderComponent(open) : null}
        <DropdownMenuContainer $open={open}>
          {this.props.children}
        </DropdownMenuContainer>
      </DropdownContainer>
    )
  }
}

export default Dropdown
