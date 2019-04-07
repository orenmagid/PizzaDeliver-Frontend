const sizeConfig = {
  sm: {
    spinnerSvg: {
      height: '0.75rem',
      width: '0.75rem'
    }
  },
  md: {
    spinnerSvg: {
      height: '0.875rem',
      width: '0.875rem'
    }
  },
  lg: {
    spinnerSvg: {
      height: '1rem',
      width: '1rem'
    }
  }
}

const animation = {
  to: {
    transform: 'rotate(360deg)'
  }
}

const styles = {
  spinnerContainer: ({ $size }) => {
    return {
      position: 'absolute',
      backgroundColor: 'transparent',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  spinnerSvg: ({ $size }) => {
    return {
      ...sizeConfig[$size].spinnerSvg,
      animationName: animation,
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationDuration: '0.75s'
    }
  }
}

export default styles
