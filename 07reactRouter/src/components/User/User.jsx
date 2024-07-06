import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-orange-600 text-black p-4 rounded-2xl justify-center text-center'>User : {userId}</div>
  )
}

export default User