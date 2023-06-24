import React from 'react'

const Tooltip = ({ children, data, tooltip }) => {
  return (
    <div className={tooltip ? tooltip : "tooltip"} data-tip={data}>
      {children}
    </div>
  )
}

export default Tooltip