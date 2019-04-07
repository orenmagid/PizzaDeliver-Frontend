import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'
import styles from './styles'

const SpinnerContainer = styled('div', styles.spinnerContainer)
const SpinnerSvg = styled('svg', styles.spinnerSvg)

class Spinner extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    color: PropTypes.string
  }

  static defaultProps = {
    size: 'md',
    color: 'textPrimary'
  }

  render() {
    const { size, color } = this.props

    return (
      <SpinnerContainer $size={size}>
        <SpinnerSvg viewBox="0 0 32 32" $size={size}>
          <circle
            cx="16"
            cy="16"
            fill="none"
            r="14"
            strokeWidth="4"
            style={{ stroke: color, opacity: 0.2 }}
          />
          <circle
            cx="16"
            cy="16"
            fill="none"
            r="14"
            strokeWidth="4"
            style={{
              stroke: color,
              strokeDasharray: 80,
              strokeDashoffset: 60
            }}
          />
        </SpinnerSvg>
      </SpinnerContainer>
    )
  }
}

export default Spinner
