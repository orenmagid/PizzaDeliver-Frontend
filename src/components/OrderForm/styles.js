import { themeColors, textColors } from '../../constants'

const styles = {
  form: {
    margin: '2rem auto',
    width: '500px'
  },
  table: {
    border: `1px solid ${themeColors.secondaryColor}`,
    width: '100%',
    minHeight: '200px'
  },
  tableHeader: {
    borderBottom: `1px solid ${themeColors.secondaryColor}`,
    width: '200px',
    textAlign: 'center',
    paddingBottom: '.5rem',
    color: `${textColors.textPrimary}`
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: '1rem 0'
  },
  tableCell: {
    width: '200px',
    textAlign: 'center',
    color: `${textColors.textPrimary}`
  },
  row: {
    display: 'flex',
    margin: '1rem'
  },
  field: {
    margin: '.25rem 1rem'
  }
}

export default styles
