import Color from 'color'

export const fade = (hex, percent) => {
  return Color(hex)
    .fade(percent)
    .object()
}

export const lighten = (colorCode, percent) => {
  let hex = colorCode

  return Color(hex)
    .lighten(percent)
    .hex()
}

export const darken = (colorCode, percent) => {
  let hex = colorCode

  return Color(hex)
    .darken(percent)
    .hex()
}
