import React, { Component } from 'react'
import { styled } from 'styletron-react'

const styles = {
  view: {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  }
}

const View = styled('div', styles.view)

export default (WrappedComponent, viewProps) =>
  class extends Component {
    shouldComponentUpdate(nextProps) {
      const { location } = this.props
      if (nextProps.location.pathname !== location.pathname) {
        return true
      } else {
        return false
      }
    }

    render() {
      return (
        <View {...viewProps}>
          <WrappedComponent {...this.props} />
        </View>
      )
    }
  }
