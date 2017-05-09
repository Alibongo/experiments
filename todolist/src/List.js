import React from 'react'

const List = ({nameOfProps})=>{
  return(
    <ul>
    {
      nameOfProps.map((item,index) => (
        <li key={index}>{item}</li>
      )
    )


}
    </ul>
  )
}
export default List
