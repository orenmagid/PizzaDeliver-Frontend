import { themeColors } from '../../../constants'
import { darken } from '../../../utils/color'

const styles = {
  dropdownItemContainer: {
    ':visited': {
      color: 'inherit'
    },

    ':hover': {
      color: themeColors.textColor,
      backgroundColor: themeColors.tertiaryColor
    },

    ':active': {
      color: themeColors.textColor,
      backgroundColor: darken(themeColors.tertiaryColor, 0.1)
    }
  },

  dropdownItemContent: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}

export default styles
