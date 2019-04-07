import { textColors } from '../../../constants'
import { lighten, darken } from '../../../utils/color'
import { transitions } from '../../../constants'

const styles = {
  button: ({ $color, $outline, $disabled, $fetching }) => {
    const color =
      $outline && !$fetching
        ? textColors.textSecondary
        : $outline && $fetching
        ? $color
        : '#fff'
    const backgroundColor = $outline ? '#fff' : $color
    const borderColor =
      $outline && !$fetching
        ? textColors.textSecondary
        : $outline && $fetching
        ? $color
        : $color

    const pseudoStyles =
      !$disabled && !$fetching
        ? {
            ':hover': {
              color: $outline ? lighten($color, 0.3) : '#fff',
              fill: $outline ? lighten($color, 0.3) : '#fff',
              backgroundColor: $outline ? '#fff' : lighten($color, 0.1),
              borderColor: lighten($color, 0.1)
            },
            ':focus': {
              color: $outline ? darken($color, 0.3) : '#fff',
              fill: $outline ? darken($color, 0.3) : '#fff',
              backgroundColor: $outline ? '#fff' : darken($color, 0.1),
              borderColor: darken($color, 0.1)
            },
            ':active': {
              color: $outline ? darken($color, 0.3) : '#fff',
              fill: $outline ? darken($color, 0.3) : '#fff',
              backgroundColor: $outline ? '#fff' : darken($color, 0.1),
              borderColor: darken($color, 0.1)
            }
          }
        : {}

    return {
      color,
      backgroundColor,
      borderColor,
      fill: color,
      transition: `all ${transitions.standardTiming} ${
        transitions.standardCubic
      }`,
      ...pseudoStyles
    }
  },

  buttonContent: ({ $fetching }) => {
    return {
      visibility: $fetching ? 'hidden' : 'visible'
    }
  },

  buttonIcon: () => {
    return {}
  }
}

export default styles
