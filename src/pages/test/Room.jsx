import React from 'react'
import Person from './Person'

const Room = () => {
  return (
    <div className='flex'>Room
      <Person name="sak" age = {20}/>
      <Person name="saks" age = {220}/>
      <Person name="saksh" age = {200}/>
      <Person />
      <Person/>
    </div>
  )
}

export default Room