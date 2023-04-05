import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div>
       <h1>404 ERROR</h1>
      <Link to="/" className='btn'>Go back to Home</Link>
    </div>
  )
}

export default Error
