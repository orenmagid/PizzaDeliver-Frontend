import { themeColors } from '../../../constants'

const styles = {
  baseDropdownContainer: {
    position: 'relative',
    maxWidth: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    userSelect: 'none',
    cursor: 'pointer'
  },

  baseDropdownMenuContainer: ({ $open }) => ({
    display: $open ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    overflow: 'hidden',
    paddingTop: '0.5rem',
    marginTop: '0.25rem',
    paddingBottom: '0.5rem',
    right: 0,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: themeColors.secondaryColor,
    borderRadius: '0.25rem',
    backgroundColor: '#fff',
    zIndex: 1001
  }),

  baseDropdownItemContainer: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    color: themeColors.textColor,
    textDecoration: 'none'
  },

  baseDropdownItemContent: {
    whiteSpace: 'nowrap',
    fontSize: '0.875rem'
  },

  baseDropdownItemIcon: {
    position: 'absolute',
    left: '0.5rem',
    height: '1rem',
    width: '1rem'
  }
}

export default styles
