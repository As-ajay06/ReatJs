import React from 'react'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)

  if (!user) return <div>please login</div>
  return (
    <>
    <h1>Welcome</h1>
    </>
  )
}

export default Profile