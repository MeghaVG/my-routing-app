import React, { useContext } from 'react'
import { UserContext } from './HomePage'

export default function ViewUserDetails() {
    const userDetails=useContext(UserContext)
  return (
    <div>ViewUserDetails {userDetails}</div>
  )
}
