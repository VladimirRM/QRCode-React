import React from 'react'
import QRCode from 'react-qr-code'

const LiveQrCode = ({value}) => {
  return (
    <QRCode value={value}/>
  )
}

export default LiveQrCode 