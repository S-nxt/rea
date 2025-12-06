import { Link } from "react-router-dom";

import React from 'react'

const NotFound = () => {
  return (
    <div className='h-[80vh] bg-slate-100 flex justify-center items-center'>
      The page is unavailable
      got to <Link to="/home" className='text-blue-500'>Home</Link>.
    </div>
  )
}

export default NotFound