import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

function Signout() {
    const navigation = useNavigate()
    useEffect(()=>{
        auth.signOut().then(()=>{
navigation('/login')
        })
    })
  return (
    <>
    Signing out...
    </>
  )
}

export default Signout