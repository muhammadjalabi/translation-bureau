import React from 'react'
import { IconText, IconWrapper } from './Icon.styles'

function Icon({ children, color, className, text, textClassName }) {
  return (
    <>
      <IconWrapper className={className} color={color}>
        {children}
        {text && <IconText className={textClassName}>{text}</IconText>}
      </IconWrapper>
    </>
  )
}

export default Icon
