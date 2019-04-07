import React, { Component } from 'react'
import Button from '../components/Button'
import { themeColors } from '../constants'
class NewAddressForm extends Component {
  render() {
    const { handleChange, newAddress, handleVerifyAddress } = this.props
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-apart'
        }}
      >
        <input
          onChange={handleChange}
          value={newAddress}
          style={{ padding: '.5rem', flex: '3' }}
          type="text"
          placeholder="Enter your full address"
        />
        <Button
          style={{ marginLeft: '.5rem' }}
          color={themeColors.primaryColor}
          size={'sm'}
          onClick={handleVerifyAddress}
        >
          Verify Address
        </Button>
      </div>
    )
  }
}

export default NewAddressForm
