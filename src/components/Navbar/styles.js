import { themeColors } from '../../constants'
import { lighten, darken } from '../../utils/color'

const styles = {
  navbar: {
    position: 'fixed',
    height: '4rem',
    width: '100%',
    backgroundColor: themeColors.primaryColor,
    zIndex: 1001,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  navbarContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    paddingLeft: '5rem',
    paddingRight: '5rem'
  },
  secondaryButton: {
    borderColor: themeColors.secondaryColor,
    backgroundColor: themeColors.secondaryColor,
    color: themeColors.quinaryColor,
    ':hover': {
      backgroundColor: lighten(themeColors.secondaryColor, 0.3),
      borderColor: lighten(themeColors.secondaryColor, 0.3)
    },

    ':focus': {
      backgroundColor: darken(themeColors.secondaryColor, 0.1),
      borderColor: darken(themeColors.secondaryColor, 0.1)
    },

    ':active': {
      backgroundColor: darken(themeColors.secondaryColor, 0.2),
      borderColor: darken(themeColors.secondaryColor, 0.2)
    }
  }
}

export default styles
