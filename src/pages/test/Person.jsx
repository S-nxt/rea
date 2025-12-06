import React from 'react'

const Person = (props) => {
  return (
    <div className='p-3 border w-50 my-2'>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>

    </div>
  )
}

export default Person