import React from 'react'

type button = {
    name:string,
    age:number
    gender:string
}

type anotherbtn= button & {
    name:string,
    cnic:number,
    location:string | number 
}

const Props = ({PropsType:anotherbtn}) => {
  return (
    <>
      
    </>
  )
}

export default Props
