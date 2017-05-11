import React from 'react'

const List = ({items})=>{
  console.log(items)
  return(
    <ul>
    {
      items.map((item,index) => (
        <li key={index}>{item.text}<input type="checkbox"/></li>
      )
    )


}
    </ul>
  )
}
export default List
