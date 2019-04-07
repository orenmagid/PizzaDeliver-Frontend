const sizeConfig = {
  sm: {
    height: '1.75rem',
    lineHeight: '1.75rem',
    fontSize: '0.75rem',
    paddingLeft: '0.7rem',
    paddingRight: '0.7rem'
  },
  md: {
    height: '2rem',
    lineHeight: '2rem',
    fontSize: '0.875rem',
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem'
  },
  lg: {
    height: '2.5rem',
    lineHeight: '2.5rem',
    fontSize: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem'
  }
}

const styles = {
  baseButton: ({ $size, $rounded, $block, $disabled }) => ({
    position: 'relative',
    display: $block ? 'block' : 'inline-block',
    width: $block ? '100%' : 'auto',
    // maxWidth: '100%',

    ...sizeConfig[$size],

    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: $rounded ? '2.5rem' : '0.25rem',

    fontWeight: '300',
    textAlign: 'center',
    userSelect: 'none',
    outline: '0',

    cursor: $disabled ? 'auto' : 'pointer',
    opacity: $disabled ? 0.5 : 1,
    pointerEvents: $disabled ? 'none' : 'auto'
  }),

  baseButtonContent: {
    display: 'inline-flex',
    maxWidth: '100%',
    height: '100%',
    alignItems: 'center'
  },

  baseButtonText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}

export default styles
