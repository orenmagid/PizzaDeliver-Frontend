import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { textColors } from '../../../constants'
import { BaseButton, BaseButtonContent, BaseButtonText } from '../Base'
import Spinner from '../../Spinner'

import { withStyle } from 'styletron-react'
import styles from './styles'

const Button = withStyle(BaseButton, styles.button)
const ButtonContent = withStyle(BaseButtonContent, styles.buttonContent)
const ButtonText = withStyle(BaseButtonText, styles.buttonText)

class MeeterButton extends PureComponent {
  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    fetching: PropTypes.bool
  }

  static defaultProps = {
    /** xs, sm, lg */
    size: 'md',
    color: textColors.textPrimary,
    disabled: false,
    block: false,
    fetching: false
  }

  handleClick = e => {
    const { disabled, fetching, onClick } = this.props
    if (!disabled && !fetching) {
      return onClick && onClick(e)
    }
  }

  render() {
    const {
      onClick,
      size,
      color,
      outline,
      rounded,
      block,
      disabled,
      fetching,
      type,
      ...rest
    } = this.props

    return (
      <Button
        onClick={this.handleClick}
        type={type}
        $size={size}
        $color={color}
        $outline={outline}
        $rounded={rounded}
        $block={block}
        $disabled={disabled || fetching}
        $fetching={fetching}
        {...rest}
      >
        {fetching ? (
          <Spinner color={outline ? color : 'white'} size={size} />
        ) : null}
        <ButtonContent $fetching={fetching}>
          <ButtonText>{this.props.children}</ButtonText>
        </ButtonContent>
      </Button>
    )
  }
}

export default MeeterButton
