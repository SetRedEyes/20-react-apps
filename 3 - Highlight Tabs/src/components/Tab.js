import React, { useState } from 'react'

export const Tab = ({ children }) => {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 })

  const moveHighlight = (e) => {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150
    })
  }

  const hideHighLight = (e) => {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
      opacity: 0
    })
  }

  return (
    <div className='tab'
    onMouseOut={hideHighLight}
    onMouseMove={moveHighlight}>
      <div className='highlight' style={highlightStyle} />
        {children}
    </div>
  )
}
