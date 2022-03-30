import React from 'react'
import Tag from '../src'

export const CustomColor = () => {
  return (
    <>
      <h1>Tag Custom Color</h1>
      <div style={{ display: 'flex', gap: 8 }}>
        <Tag color="#48D4CF">color #48D4CF</Tag>
        <Tag background="#48D4CF" appearance="solid">
          background #48D4CF
        </Tag>
      </div>
    </>
  )
}
