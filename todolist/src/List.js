import React from 'react'

const List = ({text, checked, onChange, ...props}) => {
  return (
    <div>
      <input type="checkbox" checked={checked} onChange={() => onChange(text)} />
  		<span>{text}</span>
    </div>
  )
}

export default List
