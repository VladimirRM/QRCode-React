
import React from 'react'

const BasicInput = ({value,type,onChange,...rest}) => {
  return (
    <div {...rest}>
        <label>{label}</label>
        <br />
        <input type={type} value={value} onChange={onChange}  />
    </div>
  )
}

export default BasicInput